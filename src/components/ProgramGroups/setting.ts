import { bold, image, link, listItem, plain, space } from "../../services/ContentGenerator";
import { TProgramGeneralInfo, TProgramInfo } from "./types";

export const LIST_PROGRAM_INFO: TProgramInfo[] = [
	{
		id: "summer-camp",
		thumbnailTitle: "Trại hè",
		thumbnailImage: {
			imgSrc: "/contents/program/summerCamp/Thumbnail-SummerCamp.jpg",
			imgAlt: "Thumbnail-SummerCamp.jpg",
		},
		posterTitle: "CHƯƠNG TRÌNH TRẠI HÈ",
		posterImage: {
			imgSrc: "/contents/program/summerCamp/Poster-SummerCamp.jpg",
			imgAlt: "Poster-SummerCamp.jpg",
		},
		listContent: [
			bold("Đất nước: Canada"),
			bold("Thời gian: 2 tuần – 3 tuần"),
			bold("Số lượng: 25 – 50 học sinh"),
			bold("Tháng: 7 và 8 hằng năm"),
			space,
			bold("I. Mục Đích:"),
			plain("Chương trình trại hè được tổ chức bởi CAN Immigration Vietnam. Được học tập và du lịch tại thành phố Toronto sẽ là cơ hội lý tưởng cho học sinh trải nghiệm nhiều điều mới mẻ và khám phá những điều thú vị tại nơi đây. Nhưng vì sao ta lại chọn Canada là đất nước nên đến nhất trong năm nay? Vì Canada là một đất nước đa sắc tộc, nhưng lại rất thân thiện và không phân biệt chủng tộc. Đồng thời Canada là đất nước duy nhất mà hiện nay chính phủ có chính sách định cư dễ dàng cho các du học sinh. Mỗi thành phố mà học sinh tham quan điều mang một nét rất riêng về văn hoá, dân tộc, ngôn ngữ, và kiến trúc. Khoảng thời gian tuần sinh hoạt và học tập các cháu sẽ có cơ hội giao lưu với các học viên quốc tế đến từ Hàn Quốc, Nhật Bản, Trung Quốc, Nam Mỹ, và Châu Âu."),
			bold("Sau khi kết thúc chương trình, học sinh sẽ:"),
			listItem("Định hướng về du học trong tương lai."),
			listItem("Nâng cao về kiến thức và văn hoá về đất nước và con người Canada."),
			listItem("Làm quen với cuộc sống du học, có cơ hội gặp mặt bạn bè quốc tế."),
			listItem("Nhận được giấy chứng nhận hoàn thành 2 tuần winter camp 2023 từ trường."),
			listItem("Nâng cao trình độ Anh ngữ: kỹ năng giao tiếp, nghe nói, tự tin khi sử dụng tiếng Anh."),
			listItem("Các kỹ năng, sự hiểu biết khác tại nước hàng đầu trên thế giới: tính độc lập, tự chủ giải quyết các vấn đề, kỹ năng làm việc nhóm."),
			listItem("Trong quá trình tham gia trại đông các học sinh được phép chuyển đổi sang study permit và chính thức học tập tại Canada."),
			listItem("Lợi ích lớn nhất là học sinh nhận được Visa Canada sẽ rất có lợi cho việc nộp đơn xin visa các nước khác như Mỹ, Châu Ấu, Úc. Đồng thời nhận được Visa các nước như Hàn Quốc, Nhật Bản, và Đài Loan sẽ dễ dàng hơn rất nhiều."),
			space,
			bold("II. Đối tượng tham gia chương trình:"),
			listItem("Độ tuổi từ 14 đến 17 (lớp 8 đến lớp 12)"),
			listItem("Học sinh độ tuổi THCS và THPT."),
			space,
			bold("III. Chi tiết chương trình:"),
			plain("Thời gian: 2 tuần, 3tuần, hoặc 4 tuần"),
			plain("Mức phí: $5,000 CAD ~ $7000CAD"),
			bold("Mức phí bao gồm:"),
			listItem("Ký túc xá tại trường."),
			listItem("Đưa đón từ sân bay."),
			listItem("Học tiếng Anh 5 ngày/tuần (Bao gồm cả tài liệu học tập)"),
			listItem("3 bữa ăn hằng ngày."),
			listItem("Người giám hộ."),
			listItem("Bảo hiểm trong 2 tuần."),
			listItem("Phương tiện đi lại."),
			listItem("Bữa tiệc chào mừng và chia tay."),
			listItem("Giấy chứng nhận sau khi kết thúc khóa học."),
			listItem("Phí dịch thuật."),
			bold("Mức phí chưa bao gồm:"),
			listItem("Vé máy bay khứ hồi."),
			listItem("Thẻ điện thoại + 3G/Internet + Giặt ủi ngoài phạm vi ký túc xá."),
			listItem("Phí chuyển tiền hoặc thanh toán qua tài khoản ngân hàng."),
			listItem("Các chi phí cá nhân khác."),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("/contents/program/summerCamp/CHƯƠNG TRÌNH TRẠI HÈ.docx", "CHƯƠNG TRÌNH TRẠI HÈ.docx"),
		],
	},
	{
		id: "job",
		thumbnailTitle: "Việc làm",
		thumbnailImage: {
			imgSrc: "/contents/program/job/Poster-Job.jpg",
			imgAlt: "Poster-Job.jpg",
		},
		posterTitle: "CHƯƠNG TRÌNH VIỆC LÀM",
		posterImage: {
			imgSrc: "/contents/program/job/Poster-Job.jpg",
			imgAlt: "Poster-Job.jpg",
		},
		listContent: [
			image("/contents/program/job/slides/slide-1.jpg", "TEER 0 & 1: VIỆC LÀM QUẢN LÝ, ĐIỀU HÀNH-slide-1.jpg"), //
			image("/contents/program/job/slides/slide-2.jpg", "TEER 2-slide-2.jpg"),
			image("/contents/program/job/slides/slide-3.jpg", "TEER 3:-slide-3.jpg"),
			image("/contents/program/job/slides/slide-4.jpg", "TEER 4 & 5:-slide-4.jpg"),
		],
	},
	{
		id: "tourism",
		thumbnailTitle: "Du lịch",
		thumbnailImage: {
			imgSrc: "/contents/program/tourism/Thumbnail-Tourism.jpg",
			imgAlt: "Thumbnail-Tourism.jpg",
		},
		posterTitle: "DU LỊCH CANADA CẦN BAO NHIÊU TIỀN",
		posterImage: {
			imgSrc: "/contents/program/tourism/Poster-Tourism.jpg",
			imgAlt: "Poster-Tourism.jpg",
		},
		listContent: [
			plain("Du lịch Canada sẽ chia làm 4 diện phổ thông nhất"),
			listItem("Thăm thân nhân."),
			listItem("Khảo sát thị trường Canada."),
			listItem("Du lịch tự túc hoặc theo tour."),
			listItem("Tham gia sự kiện."),
			plain("Tuỳ theo hồ sơ của mỗi người, Can Immigration Vietnam sẽ sắp xếp hồ sơ theo lộ trình phù hợp nhất với khách hàng của công ty."),
			bold("Chi phí du lịch Canada từ 2 đến 4 tuần"),
			listItem("Phí chính phủ: $100 CAD"),
			listItem("Phí dấu sinh trắc học: $85 CAD"),
			listItem("Vé máy bay: $1200USD ~ $2000USD"),
			listItem("Di chuyển: $30CAD ~ $300CAD"),
			listItem("Nơi ở: $700CAD ~ $2000CAD"),
			listItem("Mua sắm: $1000 ~ $3000CAD"),
			listItem("Ăn uống: $400CAD ~ $600CAD"),
			bold("Giao thông công cộng"),
			plain("Khi đến Canada, bạn có thể lựa chọn một số phương tiện di chuyển phổ biến như: tàu hỏa, tàu ngầm, xe bus với mức giá khá rẻ và cũng rất tiện lợi để đi lại các nơi. Bên cạnh đó, taxi cũng là một lựa chọn phù hợp nếu muốn tiết kiệm thời gian. Ngoài ra, bạn cũng có thể thuê hẳn 1 chiếc xe hơi để tiện cho việc di chuyển đường dài."),
			bold("Chi phí nơi ở"),
			plain("Nếu bạn muốn tiết kiệm khoản chi này thì có thể lựa chọn các ký túc xá giá rẻ. Thông thường, các ký túc xá, khách sạn bình dân 2 sao hay các nhà nghỉ nằm ở vùng ngoại ô tại Canada sẽ có mức giá khoảng $25 đến $100 mỗi đêm."),
			plain("Với một số khách sạn cao cấp hơn, chất lượng đánh giá khoảng 3, 4 sao thì mức giá sẽ dao động từ $100 USD đến $250 USD."),
			plain("Ngoài ra, nếu bạn muốn được nghỉ ngơi ở những khu nghỉ dưỡng cao cấp hay các khách sạn sang trọng (4 hoặc 5 sao) thì phải chi trả mức chi phí khoảng $200 USD đến $500 USD mỗi đêm. Hầu hết các khách sạn ở đây đều phục vụ đầy đủ bữa sáng cho khách du lịch."),
			bold("Chi phí ăn uống"),
			plain("Bạn sẽ phải trả thêm 10% ~ 15% tiền tip sau khi sử dụng dịch vụ ăn uống tại tiệm. Hiện nay, một số tiệm bán thức ăn nhanh cũng đang áp dụng việc trả tiền tip."),
			plain("Thống kê một số chi phí ăn uống trung bình trong ngày cụ thể như sau:"),
			listItem("Bữa sáng tại một quán ăn: $15 USD"),
			listItem("Cà phê tại Starbucks: $3 USD đến $7 USD"),
			listItem("Bữa tối cho hai người, bao gồm rượu vang tại nhà hàng: $200 USD"),
			bold("Chi phí tham quan các địa điểm du lịch"),
			plain("Quá trình tham quan các nơi, bạn có phải chi thêm các khoản chi phí như:"),
			listItem("Vé xem phim: $12 USD đến $18 USD"),
			listItem("Chi phí tham quan bảo tàng: $12 USD đến $22 USD"),
			listItem("Phí vào cổng công viên giải trí Wonderland của Canada: $50 USD"),
			listItem("Chuyến tham quan cá voi (3 giờ): $50 USD đến $120 USD, tùy thuộc vào kích cỡ thuyền và số lượng hành khách."),
			plain("Ngoài ra, khi đến Canada, các bạn có thể tham quan du lịch tại những địa điểm nổi tiếng khác mà không cần bỏ ra bất kỳ một khoản chi phí nào."),
			bold("Mua quà lưu niệm"),
			plain("Khi đi du lịch Canada, các bạn hãy mua một số mặt hàng nổi tiếng như Maple Syrup, Icewine, cherries, tinh dầu hạt cải cùng một số đồ lưu niệm nhỏ xinh khác để làm quà cho bạn bè và người thân."),
			bold("Các chi phí khác"),
			plain("Tiền tip cho nhân viên là việc khá phổ biến ở Canada. Nói chung, người Canada tip 15% đến 20% cho các dịch vụ, chẳng hạn như ở nhà hàng và quán bar, thợ làm tóc, tài xế taxi, nhân viên khách sạn… Vì thế, bạn cần dự trù đến khoản chi này khi lên kế hoạch du lịch Canada trong thời gian tới."),
			bold("Du lịch Canada được mang bao nhiêu tiền?"),
			plain("Theo kinh nghiệm, khi đi du lịch Canada, các bạn không nên đem theo quá $5,000 USD tiền mặt. Trong trường hợp nếu cần thiết phải đem theo nhiều tiền mặt, khách du lịch phải tiến hành khai báo với hải quan và thực hiện một số thủ tục hành chính cần thiết."),
			plain("Tốt nhất, để quá trình tham quan du lịch tại Canada diễn ra thuận lợi và thành công, các bạn chỉ nên đem số tiền mặt theo quy định, còn lại, chúng ta hãy thanh toán bằng thẻ tín dụng hoặc thẻ ATM cho các giao dịch khác."),
			plain("Trên thực tế, chi phí du lịch Canada cũng không quá cao nếu bạn biết cách lên kế hoạch thật chu đáo và tỉ mỉ cũng như tính toán các chi phí thật khoa học. Hy vọng bài viết chúng tôi vừa chia sẻ đã cung cấp những thông tin thú vị và bổ ích cho các bạn trong chuyến đi Canada sắp tới."),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("/contents/program/tourism/DU LỊCH CANADA CẦN BAO NHIÊU TIỀN.docx", "DU LỊCH CANADA CẦN BAO NHIÊU TIỀN.docx"),
		],
	},
	{
		id: "settled",
		thumbnailTitle: "Định cư",
		thumbnailImage: {
			imgSrc: "/contents/program/settled/Thumbnail-Settled.jpg",
			imgAlt: "Thumbnail-Settled.jpg",
		},
		posterTitle: "CHƯƠNG TRÌNH ĐỊNH CƯ",
		posterImage: {
			imgSrc: "/contents/program/settled/Poster-Settled.jpg",
			imgAlt: "Poster-Settled.jpg",
		},
		listContent: [
			image("/contents/program/settled/slides/slide-1.jpg", "CÁC CHƯƠNG TRÌNH ĐỊNH CƯ CANADA-slide-1.jpg"), //
			image("/contents/program/settled/slides/slide-2.jpg", "PNP ĐỀ CỬ TỈNH-slide-2.jpg"),
			image("/contents/program/settled/slides/slide-3.jpg", "5 GIAI ĐOẠN TIẾP NHẬN HỒ SƠ-slide-3.jpg"),
			image("/contents/program/settled/slides/slide-4.jpg", "AIP/SINP ĐỊNH CƯ TRỰC TIẾP-slide-4.jpg"),
			image("/contents/program/settled/slides/slide-5.jpg", "5 GIAI ĐOẠN TIẾP NHẬN HỒ SƠ-slide-5.jpg"),
			image("/contents/program/settled/slides/slide-6.jpg", "SUV ĐỊNH CƯ ĐẦU TƯ KHỞI NGHIỆP-slide-6.jpg"),
			image("/contents/program/settled/slides/slide-7.jpg", "TIMELINE-slide-7.jpg"),
			image("/contents/program/settled/slides/slide-8.jpg", "EXPRESS ENTRY-slide-8.jpg"),
			image("/contents/program/settled/slides/slide-9.jpg", "EXPRESS ENTRY CEC/FSW-slide-9.jpg"),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("/contents/program/settled/CHƯƠNG TRÌNH ĐỊNH CƯ.docx", "CHƯƠNG TRÌNH ĐỊNH CƯ.docx"),
		],
	},
	{
		id: "study-abroad",
		thumbnailTitle: "Du học",
		thumbnailImage: {
			imgSrc: "/contents/program/studyAbroad/Thumbnail-StudyAbroad.jpg",
			imgAlt: "Thumbnail-StudyAbroad.jpg",
		},
		posterTitle: "CHƯƠNG TRÌNH DU HỌC",
		posterImage: {
			imgSrc: "/contents/program/studyAbroad/Poster-StudyAbroad.jpg",
			imgAlt: "Poster-StudyAbroad.jpg",
		},
		listContent: [
			plain("Nhu cầu du học tại Canada đã tăng mạnh trong những năm gần đây. Là quốc gia sở hữu 26 Đại học xuất sắc nhất thế giới, Canada thu hút hơn 388,000 sinh viên quốc tế, trong đó có hơn du học sinh Việt Nam xếp thứ 5 trong số các quốc gia có nhiều du học sinh nhất đang theo học tại Canada."),
			bold("1. Du học diện SDS - Không cần chứng minh tài chính"),
			plain("Chỉ dành cho học sinh đã tốt nghiệp lớp 12 và đăng ký cao đẳng, đại học tại Canada."),
			bold("Yêu cầu:"),
			listItem("IELTS 6.0 không kỹ năng nào dưới 6.0 (đối với trường hợp đã tốt nghiệp đại học tại Việt Nam, yêu cầu overall IELTS 6.5)"),
			listItem("Giấy chấp nhận nhập học của trường cao đẳng/đại học tại Canada. Biên lai đóng tiền học phí 1 năm $18,000 CAD trở lên (tùy trường, tỉnh bang, thành phố)"),
			listItem("Đăng ký ngân hàng cá nhân tại Canada GIC $10,200 CAD (số tiền $10,000 này ngân hàng sẽ hoàn lại cho học sinh khi sang Canada năm đầu tiên)"),
			bold("2. Du học Canada diện chứng minh tài chính:"),
			plain("Du học diện chứng minh tài chính thường dành cho các bé đang học lớp 6 đến lớp 12, và dành cho các anh chị dưới 30 tuổi nhưng không đủ khả năng lấy IELTS 6.0 trở lên."),
			bold("Yêu cầu:"),
			listItem("Chứng minh thu nhập của bản thân, hoặc phụ huynh 30tr – 50tr/ Tháng"),
			listItem("Chứng minh tài sản: nhà, đất đai, ô tô, chứng khoán, v.v…"),
			listItem("Chứng minh khả năng học tập: học bạ, bảng điểm, IELTS v.v…"),
			bold("Các chi phí khác:"),
			plain("Phí chính phủ: $150 CAD"),
			plain("Phí đăng ký trường cao đẳng: $85 - 100 CAD"),
			plain("Phí đăng ký trường THCS và THPT: $350CAD"),
			plain("Dấu sinh trắc học: $85 CAD"),
			plain("Khám sức khoẻ: $126 USD"),
			plain("Lý lịch tư pháp số 2: 200,000 VND"),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("/contents/program/studyAbroad/CHƯƠNG TRÌNH DU HỌC.docx", "CHƯƠNG TRÌNH DU HỌC.docx"),
		],
	},
	{
		id: "pathway",
		thumbnailTitle: "Pathway",
		thumbnailImage: {
			imgSrc: "/contents/program/pathway/Thumbnail-Pathway.jpg",
			imgAlt: "Thumbnail-Pathway.jpg",
		},
		posterTitle: "CHƯƠNG TRÌNH PATHWAY",
		posterImage: {
			imgSrc: "/contents/program/pathway/Poster-Pathway.jpg",
			imgAlt: "Poster-Pathway.jpg",
		},
		listContent: [
			bold("CHƯƠNG TRÌNH PATHWAY LÀ GÌ?"),
			plain("Chương trình Pathway Canada không còn quá xa lạ với những bạn trẻ quốc tế, đặc biệt là các bạn trẻ Việt Nam đang quan tâm đến du học. Đây cũng là hình thức nhập học phổ biến cho du học sinh Canada."),
			plain("Hiểu một cách đơn giản thì Pathway chính là một chương trình đào tạo, hỗ trợ du học sinh chưa đáp ứng được khả năng ngoại ngữ hoặc chưa đủ điều kiện nhập học trực tiếp vào các trường đại học tại Canada để trang bị cho họ những kiến thức cần thiết trước khi vào khóa học chính thức."),
			plain("Thông thường, các khóa Pathway thường liên thông với nhiều đại học lớn tại Canada, do đó sẽ tạo điều kiện rất tốt cho việc chuyển tiếp vào đại học của sinh viên. Đặc biệt, với hình thức pathway du học Canada này, không chỉ đem đến cơ hội trau dồi thêm vốn ngoại ngữ từ lớp ESL, mà còn được tính như tín chỉ để lấy bằng đại học."),
			plain("Chương trình Pathway thường sẽ kéo dài một năm và được coi như năm nhất hệ Cử nhân. Ngay sau khi hoàn chương trình học này, những du học sinh đã đạt yêu cầu tiếng Anh và có đủ điểm GPA sẽ được chuyển tiếp lên đại học có liên kết với hệ thống, do vậy việc theo học tại một trường đại học Canada danh tiếng sẽ được rút ngắn đáng kể so với hình thức du học thông thường."),
			bold("LÝ DO NÊN LỰA CHỌN CHƯƠNG TRÌNH PATHWAY DU HỌC CANADA"),
			bold("Yêu cầu đầu vào đơn giản"),
			plain("Đối với sinh viên quốc tế không phải ai cũng có thể đáp ứng đủ những điều kiện đầu vào khắt khe của một trường Đại học danh tiếng tại Canada. Nhưng với chương trình Pathway thì khác điều kiện đầu vào đơn giản hơn hẳn. Được thiết kế tương đương với giáo án, số lượng bài học ở đại học chính quy. Điều này vừa giúp sinh viên có cơ hội tiếp cận với bậc giáo dục cử nhân, vừa dễ dàng có được 1 suất chuyển tiếp vào một trong các trường Đại học danh tiếng tại Canada khi chưa đủ yêu cầu nhập học."),
			bold("Tiết kiệm thời gian và chi phí"),
			plain("So với học phí bậc Đại học, học phí năm nhất chương trình Pathway du học Canada chỉ tương đương, thậm chí là thấp hơn. Mức học phí trung bình chỉ từ khoảng $15,000 đến $26,000 CAD. Trong khi tổng thời gian cho khóa học ngang bằng với việc nhập học thẳng vào Đại học. Sau khi kết thúc khoá học Pathway với điểm số đạt yêu cầu, du học sinh được phép liên thông thẳng lên năm 2 đại học. Như vậy với lộ trình chuyển tiếp trên, lựa chọn này không những không kéo dài kế hoạch học tập của bạn (Foundation thay cho lớp 12 tại Việt Nam, Diploma thay cho năm 1 đại học) mà còn giúp bạn có thời gian vượt qua những bỡ ngỡ ban đầu ở một đất nước mới, làm quen với thích nghi với môi trường sống nơi đây; tránh được những “cú shock văn hóa” lúc mới sang du học."),
			bold("Giúp nâng cao trình độ Anh ngữ, đảm bảo bắt kịp nhịp độ học tập"),
			plain("Song song với khoảng thời gian học pathway, du học sinh sẽ được tiếp tục trau dồi tiếng Anh giúp nâng cao trình độ ngoại ngữ, phục vụ cho quá trình học tập, nghiên cứu khi học tiếp lên học đại học tại Canada."),
			bold("Được học tập tại Campus của các trường đại học"),
			plain("Lợi ích tiếp theo phải kể đến khi theo học chương trình pathway du học Canada chính là sinh viên quốc tế sẽ được học ngay trong khuôn viên đại học liên kết và được hưởng toàn bộ những chính sách như một sinh viên đại học thông thường. Quy mô lớp học được tổ chức với số lượng ít học viên giúp giảng viên dễ dàng quan tâm, sát sao ý tới sinh viên trong quá trình học hơn."),
			bold("Kỳ nhập học linh hoạt"),
			plain("Sinh viên hoàn toàn không phải lo lắng sợ bị bỏ lỡ kỳ nhập học và dễ chọn lựa thời điểm du học phù hợp với bản thân."),
			space,
			space,
			bold("Thông tin chi tiết:"),
			link("/contents/program/pathway/CHƯƠNG TRÌNH PATHWAY.docx", "CHƯƠNG TRÌNH PATHWAY.docx"),
		],
	},
];

export const LIST_GENERAL_INFO_PROJECT: TProgramGeneralInfo[] = LIST_PROGRAM_INFO.map<TProgramGeneralInfo>((item) => {
	return {
		...item,
	};
});
