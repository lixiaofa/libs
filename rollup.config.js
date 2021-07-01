/*
 * @Descripttion: 
 * @Date: 2021-06-28 18:08:36
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-06-30 14:35:09
 * @Author: Sima thief
 */
export default [
	{
		input: 'src/main.js',
		output: {
			name: 'timeout',
			file: '/lib/tool.js',
			format: 'umd'
		},
		plugins: [
			resolve(),  // 这样 Rollup 能找到 `ms`
			commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
			eslint(),
			babel(),
			terser()
		]
	}
];

