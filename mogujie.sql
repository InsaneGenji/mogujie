/*
Navicat MySQL Data Transfer

Source Server         : InsaneGenji
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : mogujie

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-10-18 16:47:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `cart`
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `url` varchar(1000) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `color` varchar(100) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `num` tinyint(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------

-- ----------------------------
-- Table structure for `hot_list`
-- ----------------------------
DROP TABLE IF EXISTS `hot_list`;
CREATE TABLE `hot_list` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(39) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hot_list
-- ----------------------------
INSERT INTO `hot_list` VALUES ('1', 'ZARA');
INSERT INTO `hot_list` VALUES ('2', 'ZZhen 珍珍家');
INSERT INTO `hot_list` VALUES ('3', 'BIGKING 大金');
INSERT INTO `hot_list` VALUES ('4', '珊珊 Sunny33');
INSERT INTO `hot_list` VALUES ('5', 'MG小象');
INSERT INTO `hot_list` VALUES ('6', '6度');
INSERT INTO `hot_list` VALUES ('7', '钱夫人家 雪梨定制');
INSERT INTO `hot_list` VALUES ('8', '吾欢喜的衣橱');

-- ----------------------------
-- Table structure for `pbl_list`
-- ----------------------------
DROP TABLE IF EXISTS `pbl_list`;
CREATE TABLE `pbl_list` (
  `sid` int(10) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  `text` varchar(50) DEFAULT NULL,
  `hover` varchar(200) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `urllist` varchar(10000) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `color` varchar(10000) DEFAULT NULL,
  `colortitle` varchar(50) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pbl_list
-- ----------------------------
INSERT INTO `pbl_list` VALUES ('0', 'https://s5.mogucdn.com/mlcdn/c45406/191014_46k3ffb136h1h1128dl36kl5af9fk_607x1080.jpg_600x800.v1cAC.81.webp', '珊珊 Sunny33小超人;Supreme;Dior;YSL Beauty', '微胖女孩看过来啦！双十一购买更优惠！10.15—10.31提前加购，提取优惠券！11.10—10.12立刻下单，享受全年最低价！这件裙子超级有设计感哦 不规则的下摆超级好看又显瘦 随意搭配一件衬衫都很好看哦 也很适合刚进入工作的职场新人的搭配哦#双十一胖女孩为你在线试穿#', 'T方领丝绒连衣裙', 'https://s11.mogucdn.com/mlcdn/c45406/191013_30hf7453ihlij4a9l0409e743ag1l_2880x3840.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/191013_6l0cd6f3eb36be51k5lh88ibg3a5h_2316x3088.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191013_3i588ffedd4114bh6h0e6h1ki95g4_2316x3088.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191013_7db1hjkiaab8j37lhcae64fbbde08_2316x3088.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191013_25ccbfc26h86dg3l62ii90iajg7kb_2316x3088.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191013_22fd2h93ceb9a4i4fji02601el583_2316x3088.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191013_2gg33ae5i1efd8a3658gil35h7ll3_2046x3012.jpg_468x468.jpg', '99.00', 'https://s11.mogucdn.com/mlcdn/c45406/191011_72lih1837e545kck6gbc0bg6fa3gh_750x901.jpg_100x100.jpg', '黑', 'S(建议100以内）;M（建议100-115左右）;L（建议115-130左右）');
INSERT INTO `pbl_list` VALUES ('1', 'https://s11.mogucdn.com/mlcdn/c45406/191013_66c37f5idlgkh3i79d0j510eeh1h7_576x1024.jpg_600x800.v1cAC.81.webp', '糯米糯米 你不开花;老板一米六;丁走走的店', '#气温骤降，最时髦的内搭是____？#', '早秋小个子19新款韩版时尚娃娃领毛呢外套女中长款流行妮子大衣', 'https://s5.mogucdn.com/mlcdn/c45406/190929_5lj9098bf4k63g8e0kbi694k2b953_640x960.png_468x468.jpg', '189.00', 'https://s11.mogucdn.com/mlcdn/c45406/190929_8ei5i0lidh4c0k95hgd1elcl0a728_640x960.png_100x100.jpg;https://s11.mogucdn.com/mlcdn/c45406/190929_4jk791jb342a978650idi79ed1eb5_640x960.png_100x100.jpg;https://s11.mogucdn.com/mlcdn/c45406/190929_3lik3i013l967711jdg7h14a083f6_640x960.png_100x100.jpg', '绿色;卡其色;粉色', 'S;M;L;XL');
INSERT INTO `pbl_list` VALUES ('2', 'https://s5.mogucdn.com/mlcdn/c45406/191014_7jh99b7l5ebbkecgajebdf6jjlbdi_607x1080.jpg_600x800.v1cAC.81.webp', '', '多肉女生秋季省钱 穿搭 白色宽松长袖Ｔ宽松版型 打底必备 白色宽松中裤 呼应内搭 灰色宽松工装外套 层次叠穿 Ca45➕杏色休闲鞋 Tata 99 黑色小腰包 统一整体风格\n#百元以下，颜值外套大合集！#', '2019春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领百搭上衣', 'https://s11.mogucdn.com/mlcdn/c45406/180228_5jc6ehg5f3kj16b4lf62j9ia3i04a_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/180228_52h4d031d4d8lcff4044d924f686b_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/180228_40729lej88ebbha78e7ggbil4820e_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/180228_2377edgicg7k1ee3gjbf97f36bj5l_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/180228_7kf5ej7ld9kbc2a72lka37c96fg3e_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/180228_46ec6782j7122kj3142b3k2kl5267_640x960.jpg_468x468.jpg', '27.39', 'https://s11.mogucdn.com/mlcdn/c45406/180228_3e9ai8ki82b6kh2acf7716h1jd3db_640x960.jpg_100x100.jpg;https://s5.mogucdn.com/mlcdn/c45406/180228_15kclg635adddbbbg59i36hld3989_640x960.jpg_100x100.jpg;https://s11.mogucdn.com/mlcdn/c45406/180228_43g3l32i8937h2if58e5512edgfi8_640x960.jpg_100x100.jpg', '白（5866）;白（5867）;白（5868）', 'M;l;XL');
INSERT INTO `pbl_list` VALUES ('3', 'https://s11.mogucdn.com/mlcdn/c45406/191012_73cee07j2e661lh8j4lk8ei7l35h9_576x1024.jpg_600x800.v1cAC.81.webp', '大喜;MG小象;吾欢喜的衣橱;6度;YESWOMEN 小宜定制;小番茄;BIGKING 大金家;小谷', '晒出你颜值最高的毛衣搭配！#降温闹衣荒？叠穿才是正解#', '秋冬新款韩版套头立领羊羔毛外套宽松长袖卫衣慵懒风chic上衣', 'https://s5.mogucdn.com/mlcdn/c45406/191008_864b3fh85ie5a6d812c50l9fahh6g_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/191008_0lb09hlflhk2l5jde7jjbl234d4ja_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/191008_18j9eekf9kh7l465ii6b8fbge022i_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/191008_4chhd25hjfll855j0bf1ikd46c4ci_640x960.jpg_468x468.jpg', '95.00', 'https://s5.mogucdn.com/mlcdn/c45406/191008_8ahfd71c6jgf2ad307a83fak4i33k_640x960.jpg_100x100.jpg;https://s11.mogucdn.com/mlcdn/c45406/191008_5477j2jjck1c25i4bdc6fhdk33a38_640x960.jpg_100x100.jpg;https://s5.mogucdn.com/mlcdn/c45406/191008_7bcek007ib80aa3e26g6kk7436gh3_640x960.jpg_100x100.jpg;https://s5.mogucdn.com/mlcdn/c45406/191008_1ji62l597c371h1dfj43fd2kbj60e_640x960.jpg_100x100.jpg', '黑色;绿色;粉紫色;杏色', '均码');
INSERT INTO `pbl_list` VALUES ('4', 'https://s11.mogucdn.com/mlcdn/c45406/191012_2l3c6e6kb1kgj52f28ijh95e4ck35_607x1080.jpg_600x800.v1cAC.81.webp', '宿本', '偶尔也想做酷女孩 就算是不喜欢运动感也可以妥妥入个坑 版型真的很可以 松紧腰的设计 对身材的包容性更佳 搭配马丁靴真的非常靓哦！#问：秋冬如何穿出神仙好身材？#', '泫雅小彩虹系列超软糯秋季新款闺蜜装外套针织套头短款毛衣上衣', 'https://s11.mogucdn.com/mlcdn/c45406/190821_5k954aa8a01h897a55dc7ea5645kl_640x960.jpg_468x468.jpg', '69.00', 'https://s11.mogucdn.com/mlcdn/c45406/190821_5lc18i04gceda7110723lf4aa0bcj_640x960.jpg_100x100.jpg', '彩虹色套头毛衣', '均码');
INSERT INTO `pbl_list` VALUES ('5', 'https://s5.mogucdn.com/mlcdn/c45406/191012_32h83hh4ja923jdfchf5bfkg1h2ac_607x1080.jpg_600x800.v1cAC.81.webp', '', '奶盖穿搭 身高158体重43 这个卡通的人物真的太可爱啦，纯黑色的配色比较显瘦，搭配了一双小白鞋，配个黄色袜子就好啦#晒出你颜值最高的毛衣搭配！#', '早秋新款圆领卡通动物甜美百搭上衣+松紧腰开叉A字裙女大码套装', 'https://s5.mogucdn.com/mlcdn/9beb8f/190916_891hk2decgkf9dc61kfkgl2g306ej_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/190916_6iij69e1600f4i41hlgk164g4ajh1_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/190916_21ek780i79jklabgg9k7hii4032b7_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/190916_441ab27lafa50b20b754c66i04jfi_640x960.jpg_468x468.jpg', '139.6', 'https://s11.mogucdn.com/mlcdn/c45406/190916_25kh6k661j4ccbi6hkjfhdjk63f0b_640x960.jpg_100x100.jpg', '黑色（两件套）', 'L【建议90-115斤】;XL【建议115-135斤】;2XL【建议135-155斤】;3XL=L【建议155-175斤】;4XL【建议175-200斤】');
INSERT INTO `pbl_list` VALUES ('6', 'https://s5.mogucdn.com/mlcdn/c45406/191013_4cg807ba109g2ea5allfc9451lgb9_720x1280.jpg_600x800.v1cAC.81.webp', 'YESWOMEN 小宜定制;小番茄;BIGKING 大金家;小谷粒', '肚子有赘肉又腿粗这样穿显高又显瘦#降温闹衣荒？叠穿才是正解#', '19秋季新款立领拉链打底衫+系带哈伦裤工装套装潮时尚两件套女', 'https://s11.mogucdn.com/mlcdn/c45406/190918_11c5kig8kedl4fb8gchi7la7g91i8_640x960.jpg_468x468.jpg', '109.00', 'https://s5.mogucdn.com/mlcdn/c45406/190918_0l56h4aakh3685lac6bf02kdff419_640x960.jpg_100x100.jpg', '黑色打底衫+绿色裤子', 'S;M;L;XL');
INSERT INTO `pbl_list` VALUES ('7', 'https://s11.mogucdn.com/mlcdn/c45406/191014_87870ldii821al65b0lkkcl5dhb1f_607x1080.jpg_600x800.v1cAC.81.webp', '', '#晒出你颜值最高的毛衣搭配！# 彩虹毛衣怎么搭配？ look1 搭配百褶长裙 look2 搭配牛仔裤 秋冬来了 衣柜里的新衣服还该一波啦！ 如果你是微胖 小个子  担心自己穿衣服不好看？ 关注我 教你换秋冬穿搭技巧哦~', '2019新款韩版撞色彩虹条毛衣宽松慵懒风小外套条纹开衫上衣女', 'https://s11.mogucdn.com/mlcdn/c45406/191005_81ff3hj0e5ci43adc6k74da03c7i6_3840x5760.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191005_3ij17126bd6bjel2ke92kccce6fgb_3840x5760.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/55cf19/191005_86gc1f74c17jg5ci63fkii5i5kda3_750x757.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/55cf19/191005_61c68il87adfg4105g7cc8ee93hcd_750x750.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/55cf19/191005_11445e6l1af7h6b7djk9fia897hde_750x750.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/55cf19/191005_7ah0hjk7bc41hl4325c1g702fgfe4_750x750.jpg_468x468.jpg', '79.8', 'https://s5.mogucdn.com/mlcdn/55cf19/191005_33efh1k43k1a1d117a633h757dg3h_640x960.jpg_100x100.jpg', '彩虹条', '均码');
INSERT INTO `pbl_list` VALUES ('8', 'https://s11.mogucdn.com/mlcdn/c45406/191013_4j1j17c09944lj236ajc13i5e09fi_864x1080.jpg_600x800.v1cAC.81.webp', 'GUCCI;ZRA;adidas;迪士尼;', '一款很运动风的长袖外套，灰色和黑色两个颜色，都很百搭，偏宽松，搭配长裤长裙都很好看#降温闹衣荒？叠穿才是正解#', '尔给连帽卫衣外套2019新款女潮长袖韩版宽松春秋学院学生日系', 'https://s11.mogucdn.com/mlcdn/c45406/190809_705k0cg2bcekge78646kec1g3c66a_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/190809_1d45ahb4ec6d98d6j6k20j5ch334b_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/190809_7cfafk4a68fjia26d58h01f3i0lhd_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/190809_49l300c531ibgd882ia2bg9dlb0ce_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/190809_6c7d30hgcl2d3cfkfgcc9e6016jf7_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/190809_641c211llgd7ec531314e3lfe3j7l_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/190809_24hdf6blcdche6f01gialdief52j2_640x960.jpg_468x468.jpg', '105.00', 'https://s5.mogucdn.com/mlcdn/c45406/190809_3bdd01d9c6910jddch2h2ibj63lk9_640x960.jpg_100x100.jpg;https://s5.mogucdn.com/mlcdn/c45406/190809_4ddfb6dc33la6l7ih2j9c78b40ead_640x960.jpg_100x100.jpg', '黑色;花灰', 'S;M;L');
INSERT INTO `pbl_list` VALUES ('9', 'https://s5.mogucdn.com/mlcdn/c45406/191013_852e6iahdh71h8hkh458c081g38e3_640x960.jpg_600x800.v1cAC.81.webp', 'SICILY西西里', '#晒出你颜值最高的毛衣搭配！#', '西西里#韩国东大门慵懒风宽松麻花镂空泡泡袖透薄款针织衫毛衣', 'https://s11.mogucdn.com/mlcdn/c45406/191012_5jbgjd1h5c0ak467lcb7f4kel2j8d_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191012_5hb505el4bgejdeh0807ef8543h53_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/191012_512fdfl47ikajh4l2kj802jja2l24_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/191012_74ak295j87bh6d63b4h31fcdbfa18_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/191012_25f87a3i0bdga6h3g3ib30la3b6ai_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/191012_7jgg80b2eca5ic6g2flfbbi8dhjfb_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191012_1f8900g3g4ejb8g81iij2hf72g3k7_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191012_17dkigdb3h41e3dc4ac1810c808hh_640x960.jpg_468x468.jpg;https://s5.mogucdn.com/mlcdn/c45406/191012_2i0l11c2c6jgg66kjb902h4ckccl3_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191012_276e75c7lbg12e6g5ek9d4dg8639g_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191012_140h8llhggjk9dab0ik02b64gdlgb_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191012_3i8bb22b2h80818179ac1dbcc481b_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191012_424d2f7l27737i739e9j8a4315i6j_640x960.jpg_468x468.jpg;https://s11.mogucdn.com/mlcdn/c45406/191012_5fai84b75kfbehk7lffh6la6alh6d_640x960.jpg_468x468.jpg', '129.00', 'https://s5.mogucdn.com/mlcdn/55cf19/191008_7d306iagk4abijkb303057e27bl27_800x800.jpg_100x100.jpg;https://s5.mogucdn.com/mlcdn/55cf19/191008_7912cialaik0e9572ica5f4697ell_800x800.jpg_100x100.jpg;https://s5.mogucdn.com/mlcdn/55cf19/191008_08gc7cha8025587dgidj024ebba69_800x800.jpg_100x100.jpg', '灰色;杏色;粉色', '均码');

-- ----------------------------
-- Table structure for `pic_list`
-- ----------------------------
DROP TABLE IF EXISTS `pic_list`;
CREATE TABLE `pic_list` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(100) DEFAULT NULL,
  `text` varchar(39) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pic_list
-- ----------------------------
INSERT INTO `pic_list` VALUES ('1', 'https://s10.mogucdn.com/mlcdn/c45406/181031_20c98cekk381c5i3ladb506e8g290_172x172.png', '上衣');
INSERT INTO `pic_list` VALUES ('2', 'https://s10.mogucdn.com/mlcdn/c45406/181203_63cg95db7ifbg8e0aj2bfai3ga325_172x172.png', '裙装');
INSERT INTO `pic_list` VALUES ('3', 'https://s10.mogucdn.com/mlcdn/c45406/190509_722gj5bfh264i38bgja715b239hfa_224x224.png', '裤子');
INSERT INTO `pic_list` VALUES ('4', 'https://s10.mogucdn.com/mlcdn/c45406/181031_56ldahcgfcb306ieceh0f36edga0k_172x172.png', '内衣');
INSERT INTO `pic_list` VALUES ('5', 'https://s10.mogucdn.com/mlcdn/c45406/190509_6l3eg395ig7f347b2c41jdidha119_224x224.png', '女鞋');
INSERT INTO `pic_list` VALUES ('6', 'https://s10.mogucdn.com/mlcdn/c45406/181031_1fa6a0aj703ek9g6kkc5ek5495ke1_172x172.png', '包包');
INSERT INTO `pic_list` VALUES ('7', 'https://s10.mogucdn.com/mlcdn/c45406/181031_75gbbae792188710cgb83bd3j1fhj_172x172.png', '配饰');
INSERT INTO `pic_list` VALUES ('8', 'https://s10.mogucdn.com/mlcdn/c45406/190306_6ffi2507dhdicfkj3fcf528aki8ad_224x224.png', '男友');
INSERT INTO `pic_list` VALUES ('9', 'https://s10.mogucdn.com/mlcdn/c45406/181031_5i7idgb59209bhkflgc4j9c4cb87b_172x172.png', '美妆');
INSERT INTO `pic_list` VALUES ('10', 'https://s10.mogucdn.com/mlcdn/c45406/190911_5fh34iadi329ji70677dg506dl60k_172x172.png', '母婴');
INSERT INTO `pic_list` VALUES ('11', 'https://s10.mogucdn.com/mlcdn/c45406/181031_7i219f47fc0ki19f58k5di58f8ae7_172x172.png', '家居');
INSERT INTO `pic_list` VALUES ('12', 'https://s10.mogucdn.com/mlcdn/c45406/181031_7cjhfbac3bi1lbaf7i9kdbj82fbkc_172x172.png', '食品');

-- ----------------------------
-- Table structure for `popular_list`
-- ----------------------------
DROP TABLE IF EXISTS `popular_list`;
CREATE TABLE `popular_list` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(39) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of popular_list
-- ----------------------------
INSERT INTO `popular_list` VALUES ('1', '#斩男穿搭cp!!! 毛衣+半身裙#');
INSERT INTO `popular_list` VALUES ('2', '#“网骗”式换装风！反差TOP！#');
INSERT INTO `popular_list` VALUES ('3', '#手把手教你化秋日暖阳妆#');
INSERT INTO `popular_list` VALUES ('4', '#国庆见小姐妹，也要赢很大！#');
INSERT INTO `popular_list` VALUES ('5', '#格纹回归，我不允许你没有！#');
INSERT INTO `popular_list` VALUES ('6', '#国庆七日穿搭打卡计划#');

-- ----------------------------
-- Table structure for `registry`
-- ----------------------------
DROP TABLE IF EXISTS `registry`;
CREATE TABLE `registry` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `password` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of registry
-- ----------------------------
INSERT INTO `registry` VALUES ('57', 'InsaneGenji', '1255012902@qq.com', '13957303403', '412bf232f4adfd85a87c60a9b8e6333773d35eb1');
INSERT INTO `registry` VALUES ('58', '15258390453', '1301604300@qq.com', '13245678910', '7c4a8d09ca3762af61e59520943dc26494f8941b');

-- ----------------------------
-- Table structure for `text_list`
-- ----------------------------
DROP TABLE IF EXISTS `text_list`;
CREATE TABLE `text_list` (
  `sid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(39) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of text_list
-- ----------------------------
INSERT INTO `text_list` VALUES ('1', '时尚套装');
INSERT INTO `text_list` VALUES ('2', '短裤外套');
INSERT INTO `text_list` VALUES ('3', '百搭卫衣');
INSERT INTO `text_list` VALUES ('4', '小个子搭配');
INSERT INTO `text_list` VALUES ('5', '牛仔裤');
INSERT INTO `text_list` VALUES ('6', '连衣裙');
INSERT INTO `text_list` VALUES ('7', '荷叶边雪纺衫');
INSERT INTO `text_list` VALUES ('8', '半身裙');
INSERT INTO `text_list` VALUES ('9', '运动鞋');
INSERT INTO `text_list` VALUES ('10', '宽松毛衣');
