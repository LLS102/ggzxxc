<template>
	<view class="remove">
		<!-- 图片预览区域 -->
		<image :src="imageUrl" style="width: 100%; " mode="aspectFit" @load="onImageLoad" v-show="false" />
		<view class="remove-paste-submit-button">

			<view class="remove-submit-button">
				<u-button @click="chooseImage" type="primary">{{imageUrl==''?'上传图片':'更换图片'}}</u-button>
			</view>
			<view class="remove-paste-button">
				<u-button @click="cropImage" type="success" text="清除"></u-button>

				<!-- <u-button
					@click="downloadImage('https://oss.cloudhubei.com.cn/cms/release/set35/20241014/9ec7a083198223c49c06e3ebbf8df33c.jpg')"
					type="success" text="清除"></u-button> -->
			</view>
		</view>

		<view>
			<u-modal :show="popupVisible" showCancelButton='true' confirmText='保存' @cancel='onClose' @confirm='onSave'>
				<!-- 图片展示 -->
				<!-- 图片展示 -->

				<u-image :src="uploadedImageUrl" mode="aspectFit" :lazy-load="true" @click="imgPreview" />

			</u-modal>


			<!-- 保存按钮 -->

		</view>
		<view v-show='showCanvas'>
			<canvas id="cropperCanvas" canvas-id="cropperCanvas" 
				:style="{ width: canvasWidth + 'px', height: canvasHeight + 'px' , margin: '30rpx auto',zIndex:'99'}"
				@touchstart.stop="onTouchStart" @touchmove.stop.prevent="onTouchMove" @touchend="onTouchEnd">
			</canvas>
		</view>
		



		<!-- 裁剪按钮 -->
		<!-- <u-button @click="cropImage">裁剪</u-button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: '', // 存储已上传的图片URL
				imageWidth: 0, // 图片的原始宽度
				imageHeight: 0, // 图片的原始高度
				boxCoords: {
					x: 50,
					y: 50,
					width: 10,
					height: 10
				}, // 存储裁剪框的坐标和尺寸
				canvasWidth: 0, // 存储canvas的宽度
				canvasHeight: 0, // 存储canvas的高度
				scale: 1, // 图片缩放比例
				scaledWidth: 0, // 缩放后的图片宽度
				scaledHeight: 0, // 缩放后的图片高度
				isDragging: false, // 是否正在拖动裁剪框
				isResizing: false, // 是否正在调整裁剪框的大小
				resizeCorner: '', // 记录当前是否在拖动某个角落（'top-left', 'top-right', 'bottom-left', 'bottom-right'）
				dragStart: {
					x: 0,
					y: 0
				}, // 拖动开始的位置
				widthNum: 0,
				higthNum: 0,
				popupVisible: false, // 控制弹窗显示
				uploadedImageUrl: '', // 上传成功的图片地址
				showCanvas: false
			};
		},
		methods: {
			imgPreview() {

				let imgsArray = [];
				imgsArray[0] = this.uploadedImageUrl;
				console.log('imgsArray[0]', imgsArray[0])
				uni.previewImage({
					current: 0,
					urls: imgsArray,
				});

			},
			showPopup(url) {
				this.showCanvas = false
				// 模拟上传成功逻辑
				this.uploadedImageUrl = 'http://127.0.0.1：8004/api/display/image/' + url
				// 替换为实际图片URL
				this.popupVisible = true;

			},
			onSave() {
				this.downloadImage(this.uploadedImageUrl)
				this.popupVisible = false; // 关闭弹窗


			},
			onClose() {
				this.showCanvas = true
				this.popupVisible = false; // 关闭弹窗
			},
			
			downloadImage(url) {
				uni.showLoading({
					title: '保存中'
				})
				//下载图片
				uni.downloadFile({
					url,
					success: (res) => {
						console.log(res)
						if (res.statusCode === 200) {
							//鉴权
							uni.authorize({
								scope: 'scope.writePhotosAlbum',
								success: () => {
									//保存图片到相册
									uni.saveImageToPhotosAlbum({
										filePath: res.tempFilePath,
										success: () => {
											uni.showToast({
												title: '保存成功'
											})
										},
										fail: (err) => {
											//取消不为错，h5端可能有这个问题
											if (err.errMsg.includes('fail cancel')) {
												uni.hideLoading()
												return
											}
											uni.showToast({
												title: '保存失败',
												icon: "error"
											})
										}
									});
								},
								fail: () => {
									// 鉴权失败手动打开
									uni.hideLoading();
									uni.showModal({
										title: '提示',
										content: '需要保存图片权限，请在设置中打开',
										showCancel: false,
										success: uni.openSetting
									});
								}
							});

						}
					},
					fail: (err) => {
						// 地址有误处理
						uni.showToast({
							title: '图片解析失败',
							icon: 'error'
						})
					},
					complete:()=>{
						this.showCanvas = true
					}
					
				});


			},

			checkResizeCorner(x, y) {
				const cornerRadius = 10; // 调整角点的范围
				const corners = [{
						name: 'top-left',
						x: this.boxCoords.x,
						y: this.boxCoords.y
					},
					{
						name: 'top-right',
						x: this.boxCoords.x + this.boxCoords.width,
						y: this.boxCoords.y
					},
					{
						name: 'bottom-left',
						x: this.boxCoords.x,
						y: this.boxCoords.y + this.boxCoords.height
					},
					{
						name: 'bottom-right',
						x: this.boxCoords.x + this.boxCoords.width,
						y: this.boxCoords.y + this.boxCoords.height
					},
				];
				for (const corner of corners) {
					const dx = x - corner.x;
					const dy = y - corner.y;
					if (Math.sqrt(dx * dx + dy * dy) <= cornerRadius) {
						return corner.name; // 返回被点击的角落
					}
				}
				return ''; // 如果没有点击到任何角落，返回空字符串
			},
			// 图片加载后，初始化裁剪框位置
			chooseImage() {
				uni.chooseImage({
					count: 1, // Pick one image
					success: (res) => {
						const tempFilePaths = res.tempFilePaths;
						this.imageUrl = tempFilePaths[0];
						this.showCanvas = true
					},
					fail: (err) => {
						console.error('Image choose failed:', err);
					},
				});
			},
			onImageLoad() {
				// 获取设备的屏幕尺寸
				uni.getSystemInfo({
					success: (res) => {
						const screenWidth = res.screenWidth; // 获取设备的屏幕宽度
						const screenHeight = res.screenHeight; // 获取设备的屏幕高度

						// 计算 canvas 的宽度（750rpx 对应的 px 值）
						const canvasWidth = screenWidth * (710 / 750); // 转换为 px，750rpx 对应 设备屏幕宽度的 1/2

						// 设置 canvas 高度为屏幕的 80%
						const canvasHeight = screenHeight * 0.8; // canvas 高度为屏幕的80%

						// 使用 uni.getImageInfo 获取图片的宽高
						uni.getImageInfo({
							src: this.imageUrl,
							success: (res) => {
								this.imageWidth = res.width; // 保存图片的原始宽度
								this.imageHeight = res.height; // 保存图片的原始高度
								console.log('原图宽高', res.width, res.height)
								// 计算缩放比例，保持图片宽高比例
								const scale = canvasWidth / this
									.imageWidth; // 以canvas的宽度为基准，计算缩放比例
								const scaledHeight = this.imageHeight * scale; // 根据比例计算图片缩放后的高度

								// 确保canvas的高度和图片的缩放高度适配
								if (scaledHeight > canvasHeight) {
									// 如果缩放后的图片高度大于canvas高度，按照高度来缩放
									const heightScale = canvasHeight / this.imageHeight;
									const scaledWidth = this.imageWidth *
										heightScale; // 根据新的高度比例计算图片的宽度

									// 设置canvas的高度为缩放后的图片高度，宽度为按比例缩放后的宽度
									this.canvasWidth = scaledWidth;
									this.canvasHeight = canvasHeight;

									// 设置缩放后的图片宽高
									this.scaledWidth = scaledWidth;
									this.scaledHeight = canvasHeight;
									this.widthNum = this.canvasWidth / this.imageWidth
									this.higthNum = this.canvasHeight / this.imageHeight
									console.log('宽高现原比为', this.widthNum, this.higthNum)
									console.log('裁剪框宽高', this.boxCoords.width, this.boxCoords
										.height)
								} else {
									// 如果缩放后的图片高度小于canvas高度，则保持图片高度，并适配宽度
									this.canvasWidth = canvasWidth;
									this.canvasHeight = scaledHeight;

									// 设置缩放后的图片宽高
									this.scaledWidth = canvasWidth;
									this.scaledHeight = scaledHeight;
									this.widthNum = this.canvasWidth / this.imageWidth
									this.higthNum = this.canvasHeight / this.imageHeight
								}

								// 确保裁剪框在缩放后的图片上显示
								this.boxCoords.x = Math.max((this.canvasWidth - this.scaledWidth) /
									2, 0);
								this.boxCoords.y = Math.max((this.canvasHeight - this
									.scaledHeight) / 2, 0);
								this.boxCoords.width = Math.min(this.scaledWidth,
									300); // 限制裁剪框的最大宽度
								this.boxCoords.height = Math.min(this.scaledHeight,
									200); // 限制裁剪框的最大高度

								// 确保裁剪框的大小不超过画布
								this.boxCoords.width = Math.min(this.boxCoords.width, this
									.canvasWidth);
								this.boxCoords.height = Math.min(this.boxCoords.height, this
									.canvasHeight);

								// 绘制图片和裁剪框
								this.drawCanvas();

							},
							fail: (err) => {
								console.error("Error getting image info:", err);
							}
						});
					}
				});
			},


			cropImage() {
		
				if (this.imageUrl == '') {
					uni.showToast({
						title: '请上传图片',
						icon: 'error'
					});
					return;
				}
				const scaledX = this.boxCoords.x;
				const scaledY = this.boxCoords.y;
				const scaledWidth = this.boxCoords.width;
				const scaledHeight = this.boxCoords.height;
				// this.widthNum = this.scaledHeight / this.imageWidth
				// 	  this.higthNum = this.scaledWidth / this.imageHeight

				// 将裁剪框坐标和大小还原为原始图片的坐标和大小
				const realX = scaledX / this.widthNum; // 将裁剪框的 x 坐标还原为原始图片坐标
				const realY = scaledY / this.higthNum; // 将裁剪框的 y 坐标还原为原始图片坐标
				const realWidth = scaledWidth / this.widthNum; // 将裁剪框的宽度还原为原始图片宽度
				const realHeight = scaledHeight / this.higthNum; // 将裁剪框的高度还原为原始图片高度

				console.log('Real Crop Box Coordinates (Original Image):');
				console.log(`X: ${realX}, Y: ${realY}`);
				console.log(`Width: ${realWidth}, Height: ${realHeight}`);
				console.log(this.imageUrl);
				let token = uni.getStorageSync('token');
				uni.uploadFile({
					url: 'https://lilisen.top/api/upload/image', // 替换为你的后端上传接口
					filePath: this.imageUrl,
					name: 'file', // 后端接收文件的字段名
					header: {
						'Accept': 'application/json;charset=UTF-8',
						'token': token // 保留其他需要的请求头
					},
					formData: {
						'realX': Math.ceil(realX),
						'realY': Math.ceil(realY),
						'realWidth': Math.ceil(realWidth),
						'realHeight': Math.ceil(realHeight)
					},
					success: (uploadRes) => {
						const responseText = uploadRes.data;
						const response = JSON.parse(responseText);

						console.log(response); // 打印解码后的 response

						if (response.code === 200) {
							uni.showToast({
								title: '清除成功',
								icon: 'success'
							});
							this.showCanvas = false
							this.showPopup(response.obj.message);
						} else {
							uni.showToast({
								title: '清除失败',
								icon: 'error'
							});
						}
					},
					fail: (err) => {
						console.error('Upload Error:', err);
						uni.showToast({
							title: '清除失败',
							icon: 'error'
						});
					}
				});

			},



			// 绘制图片和裁剪框
			drawCanvas() {
				const ctx = uni.createCanvasContext('cropperCanvas'); // 获取canvas上下文

				// 清空canvas
				ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

				// 绘制图片，确保按比例缩放
				ctx.drawImage(this.imageUrl, 0, 0, this.scaledWidth, this.scaledHeight);

				// 设置裁剪框样式
				ctx.setFillStyle('rgba(0, 0, 0, 0.5)'); // 半透明遮罩
				ctx.fillRect(this.boxCoords.x, this.boxCoords.y, this.boxCoords.width, this.boxCoords.height); // 绘制裁剪框

				// 绘制裁剪框边框
				ctx.setStrokeStyle('#FF0000'); // 设置裁剪框边框颜色
				ctx.strokeRect(this.boxCoords.x, this.boxCoords.y, this.boxCoords.width, this.boxCoords.height); // 绘制边框

				// 绘制裁剪框四个角的圆点
				const cornerRadius = 2; // 圆点的半径
				ctx.setFillStyle('#00FF00'); // 设置圆点颜色
				ctx.beginPath();
				ctx.arc(this.boxCoords.x, this.boxCoords.y, cornerRadius, 0, 2 * Math.PI); // 左上角
				ctx.arc(this.boxCoords.x + this.boxCoords.width, this.boxCoords.y, cornerRadius, 0, 2 * Math.PI); // 右上角
				ctx.arc(this.boxCoords.x, this.boxCoords.y + this.boxCoords.height, cornerRadius, 0, 2 * Math.PI); // 左下角
				ctx.arc(this.boxCoords.x + this.boxCoords.width, this.boxCoords.y + this.boxCoords.height, cornerRadius, 0,
					2 * Math.PI); // 右下角
				ctx.fill();


				// 刷新canvas
				ctx.draw();
			},

			// 开始拖动裁剪框或调整裁剪框
			onTouchStart(e) {

				const touch = e.touches[0];
				// 检测是否点击在裁剪框的角点区域
				const resizeCorner = this.checkResizeCorner(touch.x, touch.y);
				if (resizeCorner) {
					this.isResizing = true;
					this.resizeCorner = resizeCorner;
					this.dragStart = {
						x: touch.x,
						y: touch.y
					};
				} else if (
					touch.x >= this.boxCoords.x &&
					touch.x <= this.boxCoords.x + this.boxCoords.width &&
					touch.y >= this.boxCoords.y &&
					touch.y <= this.boxCoords.y + this.boxCoords.height
				) {
					this.isDragging = true;
					this.dragStart = {
						x: touch.x,
						y: touch.y
					};
				}
			},

			// 拖动裁剪框或调整裁剪框
			onTouchMove(e) {
				if (this.isDragging) {
					const touch = e.touches[0];
					const dx = touch.x - this.dragStart.x;
					const dy = touch.y - this.dragStart.y;

					// 移动裁剪框时，确保裁剪框不会超出画布
					const newX = this.boxCoords.x + dx;
					const newY = this.boxCoords.y + dy;

					this.boxCoords.x = Math.min(Math.max(newX, 0), this.canvasWidth - this.boxCoords.width);
					this.boxCoords.y = Math.min(Math.max(newY, 0), this.canvasHeight - this.boxCoords.height);

					this.dragStart = {
						x: touch.x,
						y: touch.y
					};
					this.drawCanvas();
				} else if (this.isResizing) {
					const touch = e.touches[0];
					const dx = touch.x - this.dragStart.x;
					const dy = touch.y - this.dragStart.y;

					switch (this.resizeCorner) {
						case 'top-left':
							this.boxCoords.x += dx;
							this.boxCoords.y += dy;
							this.boxCoords.width -= dx;
							this.boxCoords.height -= dy;
							break;
						case 'top-right':
							this.boxCoords.y += dy;
							this.boxCoords.width += dx;
							this.boxCoords.height -= dy;
							break;
						case 'bottom-left':
							this.boxCoords.x += dx;
							this.boxCoords.width -= dx;
							this.boxCoords.height += dy;
							break;
						case 'bottom-right':
							this.boxCoords.width += dx;
							this.boxCoords.height += dy;
							break;
					}

					// 限制裁剪框的最大宽度和高度
					this.boxCoords.width = Math.min(this.boxCoords.width, this.canvasWidth - this.boxCoords.x);
					this.boxCoords.height = Math.min(this.boxCoords.height, this.canvasHeight - this.boxCoords.y);

					// 限制裁剪框最小宽度和高度
					this.boxCoords.width = Math.max(this.boxCoords.width, 10);
					this.boxCoords.height = Math.max(this.boxCoords.height, 10);

					this.dragStart = {
						x: touch.x,
						y: touch.y
					};
					this.drawCanvas();
				}
			},

			// 结束裁剪框的拖动或调整
			onTouchEnd() {
				this.isDragging = false;
				this.isResizing = false;
				this.resizeCorner = '';
			},
		},

	};
</script>

<style scoped>
	.coordinates {
		margin-top: 20px;
		font-size: 16px;
	}

	.remove {
		padding: 20rpx 20rpx 20rpx 20rpx;
	}

	.remove-paste-submit-button {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.remove-paste-button,
	.remove-submit-button {
		width: 45%;
		box-shadow: 3px 3px 4px rgba(0, 102, 204, 0.2);
	}
</style>
