const dataItems = [
  {
    id: 1,
    title: "Chương I NHỮNG QUY ĐỊNH CHUNG",
    contents: [
      { content: "Điều 1. Phạm vi điều chỉnh", name: "dieu_1" },
      {
        content:
          "Điều 2. Những nguyên tắc cơ bản của chế độ hôn nhân và gia đình",
        name: "dieu_2",
      },
      {
        content: "Điều 3. Giải thích từ ngữ",
        name: "dieu_3",
      },
      {
        content:
          "Điều 4. Trách nhiệm của Nhà nước và xã hội đối với hôn nhân và gia đình",
        name: "dieu_4",
      },
      {
        content: "Điều 5. Bảo vệ chế độ hôn nhân và gia đình",
        name: "dieu_5",
      },
      {
        content:
          "Điều 6. Áp dụng quy định của Bộ luật dân sự và các luật khác có liên quan",
        name: "dieu_6",
      },
      {
        content: " Điều 7. Áp dụng tập quán về hôn nhân và gia đình",
        name: "dieu_7",
      },
    ],
  },
  {
    id: 2,
    title: "Chương II KẾT HÔN",
    contents: [
      { content: "Điều 8. Điều kiện kết hôn", name: "dieu_8" },
      {
        content: "Điều 9. Đăng ký kết hôn",
        name: "dieu_9",
      },
      {
        content:
          "Điều 10. Người có quyền yêu cầu hủy việc kết hôn trái pháp luật",
        name: "dieu_10",
      },
      {
        content: "Điều 11. Xử lý việc kết hôn trái pháp luật",
        name: "dieu_11",
      },
      {
        content: "Điều 12. Hậu quả pháp lý của việc hủy kết hôn trái pháp luật",
        name: "dieu_12",
      },

      {
        content: "Điều 13. Xử lý việc đăng ký kết hôn không đúng thẩm quyền",
        name: "dieu_13",
      },
      {
        content:
          "Điều 14. Giải quyết hậu quả của việc nam, nữ chung sống với nhau như vợ chồng mà không đăng ký kết hôn",
        name: "dieu_14",
      },
      {
        content:
          "Điều 15. Quyền, nghĩa vụ của cha mẹ và con trong trường hợp nam, nữ chung sống với nhau như vợ chồng mà không đăng ký kết hôn",
        name: "dieu_15",
      },
      {
        content:
          "Điều 16. Giải quyết quan hệ tài sản, nghĩa vụ và hợp đồng của nam, nữ chung sống với nhau như vợ chồng mà không đăng ký kết hôn",
        name: "dieu_16",
      },
    ],
  },
  {
    id: 3,
    title: "Chương III QUAN HỆ GIỮA VỢ VÀ CHỒNG",
    contents: [
      {
        content: "Điều 17. Bình đẳng về quyền, nghĩa vụ giữa vợ, chồng",
        name: "dieu_17",
      },
      {
        content: "Điều 18. Bảo vệ quyền, nghĩa vụ về nhân thân của vợ, chồng",
        name: "dieu_18",
      },
      {
        content: "Điều 19. Tình nghĩa vợ chồng",
        name: "dieu_19",
      },
      {
        content: "Điều 20. Lựa chọn nơi cư trú của vợ chồng",
        name: "dieu_20",
      },
      {
        content: "Điều 21. Tôn trọng danh dự, nhân phẩm, uy tín của vợ, chồng",
        name: "dieu_11",
      },
      {
        content:
          "Điều 22. Tôn trọng quyền tự do tín ngưỡng, tôn giáo của vợ, chồng",
        name: "dieu_22",
      },
      {
        content:
          "Điều 23. Quyền, nghĩa vụ về học tập, làm việc, tham gia hoạt động chính trị, kinh tế, văn hóa, xã hội",
        name: "dieu_23",
      },
      {
        content: "Điều 24. Căn cứ xác lập đại diện giữa vợ và chồng",
        name: "dieu_24",
      },
      {
        content: "Điều 25. Đại diện giữa vợ và chồng trong quan hệ kinh doanh",
        name: "dieu_25",
      },
      {
        content:
          "Điều 26. Đại diện giữa vợ và chồng trong trường hợp giấy chứng nhận quyền sở hữu, giấy chứng nhận quyền sử dụng đối với tài sản chung nhưng chỉ ghi tên vợ hoặc chồng",
        name: "dieu_26",
      },
      {
        content: "Điều 27. Trách nhiệm liên đới của vợ, chồng",
        name: "dieu_27",
      },
      {
        content: "Điều 28. Áp dụng chế độ tài sản của vợ chồng",
        name: "dieu_28",
      },
      {
        content: "Điều 29. Nguyên tắc chung về chế độ tài sản của vợ chồng",
        name: "dieu_29",
      },
      {
        content:
          "Điều 30. Quyền, nghĩa vụ của vợ, chồng trong việc đáp ứng nhu cầu thiết yếu của gia đình",
        name: "dieu_30",
      },
      {
        content:
          "Điều 31. Giao dịch liên quan đến nhà là nơi ở duy nhất của vợ chồng",
        name: "dieu_31",
      },
      {
        content:
          "Điều 32. Giao dịch với người thứ ba ngay tình liên quan đến tài khoản ngân hàng, tài khoản chứng khoán và động sản khác mà theo quy định của pháp luật không phải đăng ký quyền sở hữu, quyền sử dụng",
        name: "dieu_32",
      },
      {
        content: "Điều 33. Tài sản chung của vợ chồng",
        name: "dieu_33",
      },
      {
        content:
          "Điều 34. Đăng ký quyền sở hữu, quyền sử dụng đối với tài sản chung",
        name: "dieu_34",
      },
      {
        content: "Điều 35. Chiếm hữu, sử dụng, định đoạt tài sản chung",
        name: "dieu_35",
      },
      {
        content: "Điều 36. Tài sản chung được đưa vào kinh doanh",
        name: "dieu_36",
      },
      {
        content: "Điều 37. Nghĩa vụ chung về tài sản của vợ chồng",
        name: "dieu_37",
      },
      {
        content: "Điều 38. Chia tài sản chung trong thời kỳ hôn nhân",
        name: "dieu_38",
      },
      {
        content:
          "Điều 39. Thời điểm có hiệu lực của việc chia tài sản chung trong thời kỳ hôn nhân",
        name: "dieu_39",
      },
      {
        content:
          "Điều 40. Hậu quả của việc chia tài sản chung trong thời kỳ hôn nhân",
        name: "dieu_40",
      },
      {
        content:
          "Điều 41. Chấm dứt hiệu lực của việc chia tài sản chung trong thời kỳ hôn nhân",
        name: "dieu_41",
      },
      {
        content:
          "Điều 42. Chia tài sản chung trong thời kỳ hôn nhân bị vô hiệu",
        name: "dieu_42",
      },
      {
        content: "Điều 43. Tài sản riêng của vợ, chồng",
        name: "dieu_43",
      },
      {
        content: "Điều 44. Chiếm hữu, sử dụng, định đoạt tài sản riêng",
        name: "dieu_44",
      },
      {
        content: "Điều 45. Nghĩa vụ riêng về tài sản của vợ, chồng",
        name: "dieu_45",
      },
      {
        content: "Điều 46. Nhập tài sản riêng của vợ, chồng vào tài sản chung",
        name: "dieu_46",
      },
      {
        content: "Điều 47. Thỏa thuận xác lập chế độ tài sản của vợ chồng",
        name: "dieu_47",
      },
      {
        content:
          "Điều 49. Sửa đổi, bổ sung nội dung của thỏa thuận về chế độ tài sản của vợ chồng",
        name: "dieu_49",
      },
      {
        content:
          "Điều 50. Thỏa thuận về chế độ tài sản của vợ chồng bị vô hiệu",
        name: "dieu_50",
      },
    ],
  },
  {
    id: 4,
    title: "Chương IV CHẤM DỨT HÔN NHÂN",
    contents: [
      { content: "Điều 51. Quyền yêu cầu giải quyết ly hôn", name: "dieu_51" },
      {
        content: "Điều 52. Khuyến khích hòa giải ở cơ sở",
        name: "dieu_52",
      },
      {
        content: "Điều 53. Thụ lý đơn yêu cầu ly hôn",
        name: "dieu_53",
      },
      {
        content: "Điều 54. Hòa giải tại Tòa án",
        name: "dieu_54",
      },
      {
        content: "Điều 55. Thuận tình ly hôn",
        name: "dieu_55",
      },
      {
        content: "Điều 56. Ly hôn theo yêu cầu của một bên",
        name: "dieu_56",
      },
      {
        content:
          "Điều 57. Thời điểm chấm dứt hôn nhân và trách nhiệm gửi bản án, quyết định ly hôn",
        name: "dieu_57",
      },
      {
        content: "Điều 58. Quyền, nghĩa vụ của cha mẹ và con sau khi ly hôn",
        name: "dieu_58",
      },
      {
        content:
          "Điều 59. Nguyên tắc giải quyết tài sản của vợ chồng khi ly hôn",
        name: "dieu_59",
      },
      {
        content:
          "Điều 60. Giải quyết quyền, nghĩa vụ tài sản của vợ chồng đối với người thứ ba khi ly hôn",
        name: "dieu_60",
      },
      {
        content:
          "Điều 61. Chia tài sản trong trường hợp vợ chồng sống chung với gia đình",
        name: "dieu_61",
      },
      {
        content: "Điều 62. Chia quyền sử dụng đất của vợ chồng khi ly hôn",
        name: "dieu_62",
      },
      {
        content: "Điều 63. Quyền lưu cư của vợ hoặc chồng khi ly hôn",
        name: "dieu_63",
      },
      {
        content: "Điều 64. Chia tài sản chung của vợ chồng đưa vào kinh doanh",
        name: "dieu_64",
      },
      {
        content: "Điều 65. Thời điểm chấm dứt hôn nhân",
        name: "dieu_65",
      },
      {
        content: "Điều 65. Thời điểm chấm dứt hôn nhân",
        name: "dieu_65",
      },
      {
        content:
          "Điều 66. Giải quyết tài sản của vợ chồng trong trường hợp một bên chết hoặc bị Tòa án tuyên bố là đã chết",
        name: "dieu_66",
      },
      {
        content:
          "Điều 67. Quan hệ nhân thân, tài sản khi vợ, chồng bị tuyên bố là đã chết mà trở về",
        name: "dieu_67",
      },
    ],
  },
  {
    id: 5,
    title: "Chương V QUAN HỆ GIỮA CHA MẸ VÀ CON",
    contents: [
      {
        content: "Điều 68. Bảo vệ quyền và nghĩa vụ của cha mẹ và con",
        name: "dieu_68",
      },
      {
        content: "Điều 69. Nghĩa vụ và quyền của cha mẹ",
        name: "dieu_69",
      },
      {
        content: "Điều 70. Quyền và nghĩa vụ của con",
        name: "dieu_70",
      },
      {
        content: "Điều 71. Nghĩa vụ và quyền chăm sóc, nuôi dưỡng",
        name: "dieu_71",
      },
      {
        content: "Điều 72. Nghĩa vụ và quyền giáo dục con",
        name: "dieu_72",
      },
      {
        content: "Điều 73. Đại diện cho con",
        name: "dieu_73",
      },
      {
        content: "Điều 74. Bồi thường thiệt hại do con gây ra",
        name: "dieu_74",
      },
      {
        content: "Điều 75. Quyền có tài sản riêng của con",
        name: "dieu_75",
      },
      {
        content: "Điều 76. Quản lý tài sản riêng của con",
        name: "dieu_76",
      },
      {
        content:
          "Điều 77. Định đoạt tài sản riêng của con chưa thành niên, con đã thành niên mất năng lực hành vi dân sự",
        name: "dieu_77",
      },
      {
        content: "Điều 78. Quyền, nghĩa vụ của cha nuôi, mẹ nuôi và con nuôi",
        name: "dieu_78",
      },
      {
        content:
          "Điều 79. Quyền, nghĩa vụ của cha dượng, mẹ kế và con riêng của vợ hoặc của chồng",
        name: "dieu_79",
      },
      {
        content:
          "Điều 80. Quyền, nghĩa vụ của con dâu, con rể, cha mẹ vợ, cha mẹ chồng",
        name: "dieu_80",
      },
      {
        content:
          "Điều 81. Việc trông nom, chăm sóc, nuôi dưỡng, giáo dục con sau khi ly hôn",
        name: "dieu_81",
      },
      {
        content:
          "Điều 82. Nghĩa vụ, quyền của cha, mẹ không trực tiếp nuôi con sau khi ly hôn",
        name: "dieu_82",
      },
      {
        content:
          "Điều 83. Nghĩa vụ, quyền của cha, mẹ trực tiếp nuôi con đối với người không trực tiếp nuôi con sau khi ly hôn",
        name: "dieu_83",
      },
      {
        content: "Điều 84. Thay đổi người trực tiếp nuôi con sau khi ly hôn",
        name: "dieu_84",
      },
      {
        content:
          "Điều 85. Hạn chế quyền của cha, mẹ đối với con chưa thành niên",
        name: "dieu_85",
      },
      {
        content:
          "Điều 86. Người có quyền yêu cầu Tòa án hạn chế quyền của cha, mẹ đối với con chưa thành niên",
        name: "dieu_86",
      },
      {
        content:
          "Điều 87. Hậu quả pháp lý của việc cha, mẹ bị hạn chế quyền đối với con chưa thành niên",
        name: "dieu_87",
      },
      {
        content: "Điều 88. Xác định cha, mẹ",
        name: "dieu_88",
      },
      {
        content: "Điều 89. Xác định con",
        name: "dieu_89",
      },
      {
        content: "Điều 90. Quyền nhận cha, mẹ",
        name: "dieu_90",
      },
      {
        content: "Điều 91. Quyền nhận con",
        name: "dieu_91",
      },
      {
        content:
          "Điều 92. Xác định cha, mẹ, con trong trường hợp người có yêu cầu chết",
        name: "dieu_92",
      },
      {
        content:
          "Điều 93. Xác định cha, mẹ trong trường hợp sinh con bằng kỹ thuật hỗ trợ sinh sản",
        name: "dieu_93",
      },
      {
        content:
          "Điều 94. Xác định cha, mẹ trong trường hợp mang thai hộ vì mục đích nhân đạo",
        name: "dieu_94",
      },
      {
        content: "Điều 95. Điều kiện mang thai hộ vì mục đích nhân đạo",
        name: "dieu_95",
      },
      {
        content: "Điều 96. Thỏa thuận về mang thai hộ vì mục đích nhân đạo",
        name: "dieu_96",
      },
      {
        content:
          "Điều 97. Quyền, nghĩa vụ của bên mang thai hộ vì mục đích nhân đạo",
        name: "dieu_97",
      },
      {
        content:
          "Điều 98. Quyền, nghĩa vụ của bên nhờ mang thai hộ vì mục đích nhân đạo",
        name: "dieu_98",
      },
      {
        content:
          "Điều 99. Giải quyết tranh chấp liên quan đến việc sinh con bằng kỹ thuật hỗ trợ sinh sản, mang thai hộ vì mục đích nhân đạo",
        name: "dieu_99",
      },
      {
        content:
          "Điều 100. Xử lý hành vi vi phạm về sinh con bằng kỹ thuật hỗ trợ sinh sản và mang thai hộ",
        name: "dieu_100",
      },
      {
        content: "Điều 101. Thẩm quyền giải quyết việc xác định cha, mẹ, con",
        name: "dieu_101",
      },
      {
        content: "Điều 102. Người có quyền yêu cầu xác định cha, mẹ, con",
        name: "dieu_102",
      },
    ],
  },
  {
    id: 6,
    title: "Chương VI QUAN HỆ GIỮA CÁC THÀNH VIÊN KHÁC CỦA GIA ĐÌNH",
    contents: [
      {
        content:
          "Điều 103. Quyền, nghĩa vụ giữa các thành viên khác của gia đình",
        name: "dieu_103",
      },
      {
        content:
          "Điều 104. Quyền, nghĩa vụ của ông bà nội, ông bà ngoại và cháu",
        name: "dieu_104",
      },
      {
        content: "Điều 105. Quyền, nghĩa vụ của anh, chị, em",
        name: "dieu_105",
      },
      {
        content:
          "Điều 106. Quyền, nghĩa vụ của cô, dì, chú, cậu, bác ruột và cháu ruột",
        name: "dieu_106",
      },
    ],
  },
  {
    id: 7,
    title: "Chương VII CẤP DƯỠNG",
    contents: [
      {
        content: "Điều 107. Nghĩa vụ cấp dưỡng",
        name: "dieu_107",
      },
      {
        content: "Điều 108. Một người cấp dưỡng cho nhiều người",
        name: "dieu_108",
      },
      {
        content:
          "Điều 109. Nhiều người cùng cấp dưỡng cho một người hoặc cho nhiều người",
        name: "dieu_109",
      },
      {
        content: "Điều 110. Nghĩa vụ cấp dưỡng của cha, mẹ đối với con",
        name: "dieu_110",
      },
      {
        content: "Điều 111. Nghĩa vụ cấp dưỡng của con đối với cha, mẹ",
        name: "dieu_111",
      },
      {
        content: "Điều 112. Nghĩa vụ cấp dưỡng giữa anh, chị, em",
        name: "dieu_112",
      },
      {
        content:
          "Điều 113. Nghĩa vụ cấp dưỡng giữa ông bà nội, ông bà ngoại và cháu",
        name: "dieu_113",
      },
      {
        content:
          "Điều 114. Nghĩa vụ cấp dưỡng giữa cô, dì, chú, cậu, bác ruột và cháu ruột",
        name: "dieu_114",
      },
      {
        content: "Điều 115. Nghĩa vụ cấp dưỡng giữa vợ và chồng khi ly hôn",
        name: "dieu_115",
      },
      {
        content: "Điều 116. Mức cấp dưỡng",
        name: "dieu_116",
      },
      {
        content: "Điều 117. Phương thức cấp dưỡng",
        name: "dieu_117",
      },
      {
        content: "Điều 118. Chấm dứt nghĩa vụ cấp dưỡng",
        name: "dieu_118",
      },
      {
        content:
          "Điều 119. Người có quyền yêu cầu thực hiện nghĩa vụ cấp dưỡng",
        name: "dieu_119",
      },
      {
        content: "Điều 120. Khuyến khích việc trợ giúp của tổ chức, cá nhân",
        name: "dieu_120",
      },
    ],
  },
  {
    id: 8,
    title: "Chương VIII QUAN HỆ HÔN NHÂN VÀ GIA ĐÌNH CÓ YẾU TỐ NƯỚC NGOÀI",
    contents: [
      {
        content:
          "Điều 121. Bảo vệ quyền, lợi ích hợp pháp của các bên trong quan hệ hôn nhân và gia đình có yếu tố nước ngoài",
        name: "dieu_121",
      },
      {
        content:
          "Điều 122. Áp dụng pháp luật đối với quan hệ hôn nhân và gia đình có yếu tố nước ngoài",
        name: "dieu_122",
      },
      {
        content:
          "Điều 123. Thẩm quyền giải quyết các vụ việc hôn nhân và gia đình có yếu tố nước ngoài",
        name: "dieu_123",
      },
      {
        content:
          "Điều 124. Hợp pháp hóa lãnh sự giấy tờ, tài liệu về hôn nhân và gia đình",
        name: "dieu_124",
      },
      {
        content:
          "Điều 125. Công nhận, ghi chú bản án, quyết định của Tòa án, cơ quan có thẩm quyền của nước ngoài về hôn nhân và gia đình",
        name: "dieu_125",
      },
      {
        content: "Điều 126. Kết hôn có yếu tố nước ngoài",
        name: "dieu_126",
      },
      {
        content: "Điều 127. Ly hôn có yếu tố nước ngoài",
        name: "dieu_127",
      },
      {
        content: "Điều 128. Xác định cha, mẹ, con có yếu tố nước ngoài",
        name: "dieu_128",
      },
      {
        content: "Điều 129. Nghĩa vụ cấp dưỡng có yếu tố nước ngoài",
        name: "dieu_129",
      },
      {
        content:
          "Điều 130. Áp dụng chế độ tài sản của vợ chồng theo thỏa thuận; giải quyết hậu quả của việc nam, nữ chung sống với nhau như vợ chồng mà không đăng ký kết hôn có yếu tố nước ngoài",
        name: "dieu_130",
      },
    ],
  },
  {
    id: 9,
    title: "Chương IX ĐIỀU KHOẢN THI HÀNH",
    contents: [
      {
        content: "Điều 131. Điều khoản chuyển tiếp",
        name: "dieu_131",
      },
      {
        content: "Điều 132. Hiệu lực thi hành",
        name: "dieu_132",
      },
      {
        content: "Điều 133. Quy định chi tiết và hướng dẫn thi hành",
        name: "dieu_133",
      },
    ],
  },
];

export default dataItems;
