<template>
	<view class="container">
		<!-- 文件选择 -->
		<button @click="chooseFile">选择文件</button>

		<!-- 转换类型选择 -->
		<picker mode="selector" :range="conversionTypes" @change="handleConversionTypeChange">
			<view class="picker">选择转换类型: {{ conversionTypeName }}</view>
		</picker>

		<!-- 上传按钮 -->
		<button type="submit" @click="handleUpload">上传并转换</button>

		<!-- 下载链接 -->
		<a v-if="downloadUrl" :href="downloadUrl" download="converted-file.pdf">点击下载转换后的文件</a>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				file: null, // 选择的文件
				conversionType: 1, // 默认转换类型
				conversionTypeName: 'Word 转 PDF', // 默认类型名称
				conversionTypes: ['Word 转 PDF', 'PDF 转 Word'],
				uploadUrl: 'http://127.0.0.1:8004/api/upload/file', // 后端接口路径
				downloadUrl: null, // 下载链接
			};
		},
		methods: {
			// 选择文件
			chooseFile() {
				uni.chooseMessageFile({
					count: 1, //一次可以上传多少个
					// type: 'file', 
					extension: ['.doc', '.pdf', '.docx'], //文件类型
					success:(res)=>{
						this.file = res.tempFiles[0]; // 获取文件
						console.log('文件选择成功', this.file);
					},
					fail: (err) => {
						uni.showToast({
							title: '文件选择失败',
							icon: 'none',
						});
						console.error(error);
					}


				});
			},
			// 处理转换类型选择
			handleConversionTypeChange(e) {
				this.conversionType = e.target.value;
				this.conversionTypeName = this.conversionTypes[this.conversionType];
			},
			// 处理文件上传
			handleUpload(e) {
				e.preventDefault(); // 防止表单提交页面刷新

				// if (!this.file) {
				// 	uni.showToast({
				// 		title: '请选择一个文件',
				// 		icon: 'none',
				// 	});
				// 	return;
				// }


				let token = uni.getStorageSync('token');
				console.log(this.file)
				// 使用 uni.uploadFile 上传文件
				uni.uploadFile({
					url: this.uploadUrl, // 上传的服务器地址
					filePath: this.file.path, // 选择的文件路径
					name: 'file', // 后端接收文件的字段名
					header: {
						token: token,
					},
					formData: {
						conversionType: this.conversionType, // 转换类型
					},
					success: (response) => {
						if (response.statusCode === 200) {
							// 后端返回转换后的文件字节流
							const blob = new Blob([response.data], {
								type: 'application/pdf'
							});
							this.downloadUrl = URL.createObjectURL(blob);
							uni.showToast({
								title: '文件转换成功',
								icon: 'success',
							});
						} else {
							uni.showToast({
								title: '文件转换失败',
								icon: 'none',
							});
						}
					},
					fail: (error) => {
						uni.showToast({
							title: '文件上传失败',
							icon: 'none',
						});
						console.error(error);
					},
				});
			}
		},
	};
</script>