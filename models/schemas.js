var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 管理员
var adminSchema = new Schema({
    username: String, 
    password: String, 
    member: String, 
    rank: Number  
});
exports.adminSchema = adminSchema;


// 系统信息子模块：团队照片
var photoSchema = new Schema({
	title: String,
	description: String,
	url: String
});
// 系统信息子模块：分组信息
var groupsSchema = new Schema({
    name: String, 
    introduction: String, 
    leader: String, 
    others: String, 
    keyword: String, 
});
// 系统信息子模块：联系方式
var contactSchema = new Schema({
	address: String,
	github: String,
	qq: String,
	wechat: String,
	email: String
});
// 系统信息子模块：招新
var recruitSchema = new Schema({
	title: String
})

// 系统信息
var systemSchema = new Schema({
	introduction: String,
	culture: String,
	rules: String,
	photos: [photoSchema],
	recruit: [recruitSchema],
	groups: [groupsSchema],
	contact: [contactSchema]
});
exports.systemSchema = systemSchema;


// 成员
var memberSchema = new Schema({
	memberid: Number,
    grade: Number,
    name: String,
    nickname: String,
    birth: Date, 
    sex: String, 
    entertime: Date, 
    group: String, 
    headimg: String, 
    email: String, 
    introduction: String, 
    word: String
});
exports.memberSchema = memberSchema;


// 教师
var teacherSchema = new Schema({
    name: String, 
    headimg: String, 
    tel: String, 
    email: String, 
    introduction: String, 
    word: String, 
    sort: Number
});
exports.teacherSchema = teacherSchema;


// 新闻
var newsSchema = new Schema({
	title: String, 
    content: String, 
    time: Date, 
    kind: Number,   // 官方动态 or 成员日志
    author: String
});
exports.newsSchema = newsSchema;


// 项目成果
var productSchema = new Schema({
	kind: String, 
    title: String, 
    author: String, 
    time: String, 
    introduction: String, 
    img: String, 
    links: String
});
exports.productSchema = productSchema;