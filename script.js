const wordImages = {
  kami: "kami.png",
  saya: "saya.png",
  rumah: "rumah.png",
  makan: "makan.png",
  belajar: "belajar.png",
  ambil: "https://i.ibb.co/xFDdTgC/Ambil-67ae1c8186f3856aa6b2-2.jpg",
  angkat: "https://i.ibb.co/CKyDRtL/Angkat-5a39a6cc3f28b66e33d5-1.jpg",
  baca: "https://i.ibb.co/WfqmLPZ/Baca-4f6dce926d7cb25e66a3-1.jpg",
  bercakap: "https://i.ibb.co/K9BL7Xm/Bercakap-besar-a11f170056a0771a27e4.jpg",
  bawa: "https://i.ibb.co/CHscC4p/Bawa-250f55f76a406ca4adad.jpg",
  beritahu: "https://i.ibb.co/wy13Lg4/Beritahu-fd1792e920403d8e504f-1.jpg",
  berlari: "https://i.ibb.co/p4Y28D3/Berlari-1daf3af9f975eb86c8ad-1.jpg",
  bina: "https://i.ibb.co/mXcWwCN/Bina-160e1ad310bc007f2cef-1.jpg",
  bincang: "https://i.ibb.co/KWzygWy/Bincang-7c33e7a5ab9329804165.jpg",
  bohong: "https://i.ibb.co/2Pnfm2x/Bohong-Dusta-1be08c8d2eab6b1a0420.jpg",// bohong
  cari: "https://i.ibb.co/sCs539m/Cari-6243616cf7ff3cf770b1.jpg", // Cari
  dapat: "https://i.ibb.co/frJhvCZ/Dapat-bf3f428e2690fc364f3f.jpg", // Dapat
  curi: "https://i.ibb.co/y0s9VcZ/Curi-965466ebcc080427c968.jpg",
  gaduh: "https://i.ibb.co/D8jpHzd/Gaduh-94f7a9ac7b4487f0f5d5.jpg",
  hantar: "https://i.ibb.co/zSGdVZ1/Hantar-a700122bd4d677f6426f.jpg",
  hilang: "https://i.ibb.co/RhLpzbk/Hilang-ea5fae36c30c73ba8639-1.jpg",
  ikut: "https://i.ibb.co/CvpSzMX/Ikut-3213bfef8feec620e0a4.jpg",
  jawab: "https://i.ibb.co/948pGWv/Jawab-5f85da19931242278826.jpg",
  jemput: "https://i.ibb.co/WDbsz0v/Jemput-77a702021ba87450b9d7.jpg",
  kira: "https://i.ibb.co/8mZtG4r/Kira-69099b6e5d83c2c31d59.jpg",
  jumpa: "https://i.ibb.co/S0g8D75/Jumpa-II-91a442b67ea89a4a3341.jpg",
  koyak: "https://i.ibb.co/s9zPC4Q/Koyak-13b078e6e2be2737dfb4.jpg",
  langgar: "https://i.ibb.co/Gx20srh/Langgar-224e89d41a0d86ee285a.jpg",
  lihat: "https://i.ibb.co/2S0LmmK/Lihat-Tengok-40c6f1eb831eb4fa42c4.jpg",
  makanan: "https://i.ibb.co/pd6WB8L/Makan-Makanan-358171f7a0d456b53998.jpg",
  mandi: "https://i.ibb.co/RT8bLtZ/Mandi-36a248a7c1e9603e8ad9.jpg",
  mengurangkan: "https://i.ibb.co/wwCkgr0/Mengurangkan-02a18de279f29705e1e5.jpg",
  menyanyi: "https://i.ibb.co/Z6ScJCq/Menyanyi-957427491c8a7484768b.jpg",
  padam: "https://i.ibb.co/dW1gH8N/Padam-307f79819f86d82d7529.jpg",
  panggil: "https://i.ibb.co/28G8D2G/Panggil-Mari-ke-sini-d627c07987fd5023e1bb.jpg",
  pilih: "https://i.ibb.co/x3F0Ltv/Pilih-0af9dbcc68bbb2350ae5.jpg",
  pinjam: "https://i.ibb.co/cvfh18d/Pinjam-98c9761705f9bee16f96.jpg",
  rehat: "https://i.ibb.co/Z2brDNQ/Rehat-7d70da50c89337facb5c.jpg",
  sebut: "https://i.ibb.co/86fbdkk/Sebut-be772ddbb8075d0cab5e.jpg",
  simpan: "https://i.ibb.co/q9wmwmt/Simpan-c64fcc566a6388f523bc.jpg",
  tangkap: "https://i.ibb.co/DVg5fLD/Tangkap-f7c59d36acb760db05ec.jpg",
  tembak: "https://i.ibb.co/N72rk1W/Tembak-a1b48038f522bdb37276.jpg",
  tempah: "https://i.ibb.co/FxrCw9R/Tempah-828ab07f36e120451fe0.jpg",
  tidur: "https://i.ibb.co/Fq5Rwjf/Tidur-cd5c71cae6ac9a187d0e.jpg",
  tinggal: "https://i.ibb.co/h21WTxs/Tinggal-4256d7e6297d18a873c1.jpg",
  tulis: "https://i.ibb.co/T2GWpqT/Tulis-45016932c60eb1923aaa.jpg",
  tunggu: "https://i.ibb.co/9WnkLr3/Tunggu-5f10d0c13986a31c2749.jpg",
  umum: "https://i.ibb.co/XxGpbNt/Umum-Pengumuman-Makluman-18c14b2fee63cf67f154.jpg",
  adil: "https://i.ibb.co/hVNdKzS/Adil-66fd8aa49bef87c940ef-1.jpg", // Gambar untuk Adil
  bagus: "https://i.ibb.co/hBh3wpn/Bagus-52b836b6135e7d1cf228-1.jpg", // Gambar untuk Bagus
  baik: "https://i.ibb.co/JK1Ldq6/Baik-a6058694cd8fb1b44fb9.jpg", // Gambar baik
  baru: "https://i.ibb.co/zhZMJMh/Baru-Baharu-73f345f9180dfe75422b.jpg", // Gambar baru
  berat: "https://i.ibb.co/rwrD00q/Berat-167d033fd4464d4d1f7c.jpg", //  berat
  beza: "https://i.ibb.co/ZhtqK4K/Beza-31ab13b0132f19bf0d5d-1.jpg", //  beza
  bukti: "https://i.ibb.co/Ch5y3D5/Bukti-Membuktikan-45841d5839580627a4e3-1.jpg", // bukti atau membuktikan
  cemerlang: "https://i.ibb.co/5YNgXRs/Cemerlang-ecfb99e902b211bb605a-1.jpg", // Cemerlang
  cekap: "https://i.ibb.co/sqynY9M/Cekap-af8604172e39a87303a3.jpg", // Cekap
  cukup: "https://i.ibb.co/ZMS2Fzr/Cukup-1544d4da1d5a71170ac4-1.jpg", // Cukup
  digital: "https://i.ibb.co/syZkWdT/Digital-8de94d31fde61690c99f-1.jpg", // Digital
  gemuk: "https://i.ibb.co/cL53bbN/Gemuk-bd671109050e019e0d3f-1.jpg", // Gemuk
  istimewa: "https://i.ibb.co/K0jzt8Y/Istimewa-21fd6011b69f29ad987a-1.jpg", // Istimewa
  jahil: "https://i.ibb.co/sPqNNvS/Jahil-5c5a82f0f7ab158cd5e3.jpg" , // Jahil
  jujur: "https://i.ibb.co/xJDKhYW/Jujur-251a38136766d1891174.jpg", // Jujur
  kalah: "https://i.ibb.co/svvfDxw/Kalah-74f1ea3050480f86ffc3.jpg",  // Kalah
  kaya: "https://i.ibb.co/S7HHcyv/Kaya-b3ab35ea7135c8e2b752-1.jpg", // kaya
  kecil: "https://i.ibb.co/h7Zd0MW/Kecil-1830fe90565b82fd0e9b.jpg", // Kecil
  lain: "https://i.ibb.co/YZYFdJK/Lain-f542c7e09fb565c6c96f-1.jpg", // Lain
  lapar: "https://i.ibb.co/nwfVkVz/Lapar-2ad5284b47786fdab209.jpg", // Lapar
  layak: "https://i.ibb.co/Bwc5PF6/Layak-5328b64c2575c33bf147.jpg", // Layak
  luar: "https://i.ibb.co/kh7nQ7G/Luar-b174320574d590c76aec.jpg", // Luar
  luas: "https://i.ibb.co/ssvhfH9/Luas-b26cd1bca0426b379837-1.jpg", // Luas 
  masalah: "https://i.ibb.co/wKsVZHy/Masalah-622079c9a5a1549a723d-1.jpg",// Masalah 
 mataduitan: "https://i.ibb.co/nrr4jmY/Mata-duitan-4857552103dc5e705e24.jpg",// Mata Duitan 
muda: "https://i.ibb.co/vqqpzBv/Muda-ad2b6c2b18246aa1769f.jpg" ,// muda 
  mundarmandir: "https://i.ibb.co/Wps4nw6/Mundar-mandir-e7012280b480fd7ae828.jpg", // mundarmandir
  murah: "https://i.ibb.co/2SCLNW8/Murah-2ba6439d5382d9bb5b0d-1.jpg", // Murah
  nyalalakanlampu: "https://i.ibb.co/xLzLZYt/Nyalakan-lampu-547b84ae6c6615a4d9f3.jpg", // Nyalakan lampu
  panas: "https://i.ibb.co/RgfPy60/Panas-I-e196b76b1b29eb06ed8e.jpg", // Panas
  pandai: "https://i.ibb.co/h97jCkY/Pandai-2902c5e944ac2b957c5d-1.jpg", // Pandai
  pembohong: "https://i.ibb.co/bvh6T7W/Pembohong-a4817c9a5aeb0a6fb872.jpg" , // Pembohong
  pengalaman: "https://i.ibb.co/fqmZk3b/Pengalaman-45c36538c06b26e01363-1.jpg", // Pengalaman
  penting: "https://i.ibb.co/c2d26WH/Penting-71768479e2e80a639588-1.jpg" , // Penting
  penuh: "https://i.ibb.co/pzT4jB8/Penuh-068a277bf75689608e7d.jpg", // Penuh
  positif: "https://i.ibb.co/Tkff2r6/Positif-fdfeb596790f257faf49.jpg", // Positif
  raguragu: "https://i.ibb.co/9bc1sb0/Ragu-ragu-eef95b099e42812a51f1-1.jpg" ,// Raguragu
  rahsia: "https://i.ibb.co/h9GFQtN/Rahsia-dfe0f0e430d9f73ec338.jpg", // Rahsia 
  rajin: "https://i.ibb.co/PQkff4f/Rajin-94faa79778869ed1fa87.jpg", // Rajin
  selesa: "https://i.ibb.co/DRvY6gw/Selesa-8014d711e24b3c3a78e8.jpg", // Selesa 
  setuju: "https://i.ibb.co/7VjVV37/Setuju-0c74c11b505e769529eb-2.jpg", // Setuju 
  sopansantun: "https://i.ibb.co/DGQ7Lx2/Sopan-santun-dda4e6c1868b36289fc3.jpg", // Sopan santun
  tahu: "https://i.ibb.co/3rpVLsG/Tahu-902300b7533c63be32c1-1.jpg",  // Tahu
  tegas: "https://i.ibb.co/XkQsSBY/Tegas-955b6526947317bf3289.jpg", // Tegas
  terpakai: "https://i.ibb.co/DV8qCS1/Terpakai-6304f66e08506b61626b.jpg", // Terpakai
  terpengaruh: "https://i.ibb.co/K2B03pp/Terpengaruh-637b858407c6670bd006.jpg", // Terpengaruh
  tidakfaham: "https://i.ibb.co/g6YJ2yj/Tidak-faham-178d0d12c0bbf914b5d2.jpg",// Tidak Faham
  tidakselesa: "https://i.ibb.co/3YRGBRS/Tidak-selesa-5b543bfdc22f75dd1465.jpg",// Tidak Selesa
  tutup: "https://i.ibb.co/YR54wyj/Tutup-ff04d743e16a1b559727-2.jpg", //Tutup
  baikhati: "https://i.ibb.co/Dgphznw/Baik-Hati-e899b604f6257aeb799e.jpg", //BaikHati
  bimbang: "https://i.ibb.co/mq7nvHV/Bimbang-II-a891b454d81c882d3545.jpg", // Bimbang
  baikahati: "https://i.ibb.co/Dgphznw/Baik-Hati-e899b604f6257aeb799e.jpg" ,// Baik Hati
  letih: "https://i.ibb.co/g4c5mT9/Letih-c3f167daa801aee71591.jpg", // Letih
  marah: "https://i.ibb.co/Sm4HdM6/Marah-0b242c261479bb3fa3d6.jpg",// Marah
  nikmat: "https://i.ibb.co/G5SjqrM/Nikmat-6e80bc940b75502be9ea.jpg", // Nikmat
  puashati: "https://i.ibb.co/GFv3x6n/Puas-hati-370b0c5df2372c9179ea.jpg" , // Puash Hati
  putusasa: "https://i.ibb.co/mB93ZST/Putus-asa-07d33bf0e6c29df6bfe8.jpg" , // PutusAsa
  sayasayangawak: "https://i.ibb.co/KDc1MWS/Saya-sayang-awak-d72268e8f8711661636c.jpg", // Saya Sayang Awak
  sayang: "https://i.ibb.co/PwPNP40/Sayang-1a8f421cb139ccb05551.jpg", // Sayang
  semangat: "https://i.ibb.co/CMjPr0R/Semangat-fec0b7be19b8cd371642.jpg", // Semangat
  simpati: "https://i.ibb.co/jfJBp02/Simpati-eafdb7b873421827720f.jpg", // Simpati 
  tertekan: "https://i.ibb.co/K612m5m/Tertekan-bab8462d7f982364696b.jpg" , // Tertekan
  almari: "https://i.ibb.co/NmJxHsZ/Almari-89fd881bdc63362f1423.jpg" , // Almari
  baldi: "https://i.ibb.co/6B6fmG9/Baldi-3781be7ba2f3503472ca.jpg",// Baldi
  bendera: "https://i.ibb.co/z57B7pq/Bendera-e9183820c2e59f8877c6.jpg",// Bendera
  benda: "https://i.ibb.co/V2wZLSX/Benda-2000579136ed2e6e80e8.jpg", // Benda
  buku: "https://i.ibb.co/34mF9C2/Buku-24d901b3ae9f592ae848.jpg" ,// Buku
  gari: "https://i.ibb.co/g3ftQkm/Gari-8775d3b7c9706b6ab755.jpg", // Gari
  gitar: "https://i.ibb.co/SJJspKT/Gitar-774eedfcef890ae97a5e.jpg", // Gitar
  gunting: "https://i.ibb.co/8r78gkQ/Gunting-21d750be252938b3cd41.jpg", // Gunting
  pensil: "https://i.ibb.co/C9RZN33/Pensil-c9e2ed0812646ace349a.jpg" , // Pensil
  pintu: "https://i.ibb.co/V9vM5pk/Pintu-c3cc8b561a90d56df709.jpg", // Pintu
  selimut: "https://i.ibb.co/7yYN87z/Selimut-f12d4dd8b9ff3ec5423d.jpg" , // Selimut 
  seterika: "https://i.ibb.co/kh2h7Jv/Seterika-0268bd6c328f838e3902.jpg" , // Seterika
  surat: "https://i.ibb.co/nMWsLKh/Surat-c9cc16c8c10115049ba3.jpg" , // Surat
  tangga: "https://i.ibb.co/DRp8nd3/Tangga-d83d3c5da967f9fa12e4.jpg", // Tangga
  teropong:"https://i.ibb.co/sjMg7b2/Teropong-efe71d57af5fe376c40c.jpg", // Teropong
  Atau: "https://i.ibb.co/tMjKrkG/Atau-74aa6b8c7510d1c349c6.jpg", // Atau
  Dan: "https://i.ibb.co/F6ZZYTv/Dan-77a76ac8a6f790106b68-1.jpg", // Dan
  Kecuali: "https://i.ibb.co/hCZhkCt/Kecuali-0c145c698b686699423d.jpg", // Kecuali
  melalui: "https://i.ibb.co/9pmtDrF/Melalui-92a25f64f1bd9a876449.jpg", // Melalui
  sebelum: "https://i.ibb.co/L9gKpZh/Sebelum-bc87e4ca007a05dc2939.jpg", // Sebelum
  selain: "https://i.ibb.co/wg1kGdC/Selain-itu-a2a0c0670b75d252e38f.jpg", // Selain
  selepas: "https://i.ibb.co/7YczL8D/Selepas-0fa27a8adb3929ebf684.jpg", // Selepas
  semua: "https://i.ibb.co/3z0T19z/Semua-595c3f26444e59e1140a.jpg" , // Semua
  tentang: "https://i.ibb.co/V93NvZN/Tentang-8b0d1e2c025970a0c134.jpg", // Tentang 
  tadi: "https://i.ibb.co/dbcWSkF/Tadi-7acc98765ef4cfbc6c92.jpg" , // Tadi
  supaya: "https://i.ibb.co/xC6ydhW/Supaya-6bb4775652222604df78.jpg", // Supaya 
  boleh: "https://i.ibb.co/GcLkjKY/Boleh-68f3d2dc078ea01232e0-1.jpg", // Boleh 
  bukan: "https://i.ibb.co/2WTq1ZM/Bukan-1d5d665f1dcff2862c56.jpg",// Bukan
  hendakmahu: "https://i.ibb.co/R70q6Z0/Hendak-Mahu-8891c2dceb316d4856fb-1.jpg", // Hendak Mahu
  jangan: "https://i.ibb.co/4FXSzs8/Jangan-3b001ecfeb3de7d37142.jpg", // Jangan
  mesti: "https://i.ibb.co/hc0Cwm2/Mesti-01a15f326e99cddb670d-1.jpg", // Mesti
  perlu: "https://i.ibb.co/P1WCqsj/Perlu-52d9e453707139c92905-1.jpg", // Perlu
  nyaris: "https://i.ibb.co/60RbBQV/Nyaris-3750383b747b018d9050.jpg", // Nyaris
  sudah: "https://i.ibb.co/3y0hYrs/Sudah-f11e39aa9a89c5c94196.jpg" , // Sudah
  tidakada: "https://i.ibb.co/28DtH99/Tidak-ada-27f8fb93856e6971537b.jpg", // Tidak Ada
  tidakboleh: "https://i.ibb.co/f93rJKr/Tidak-boleh-15d11e4ee50096b856d4-1.jpg" , // Tidak Boleh
  ya: "https://i.ibb.co/V3xcrFR/Ya-e20111edd1d7704339c3.jpg", // Ya
  wajib: "https://i.ibb.co/z46328w/Wajib-eafd4a4d4d286251082c-1.jpg" , // Wajib
 satu: "https://i.ibb.co/RDQBCKh/1-Satu-be2c6afc02b43bc634d4.jpg", // Satu
 dua: "https://i.ibb.co/0VjB3wP/2-Dua-7b9c7a4cdea0a1fad582.jpg" , // Dua
 tiga: "https://i.ibb.co/p4x1N78/3-Tiga-b828372ea85467416eb8.jpg", // Tiga
 empat: "https://i.ibb.co/p4x1N78/3-Tiga-b828372ea85467416eb8.jpg", // Empat 
 Lima: "https://i.ibb.co/RDQBCKh/1-Satu-be2c6afc02b43bc634d4.jpg", // Lima
 enam: "https://i.ibb.co/Wc55Qn3/6-Enam-a3808fa7a23088044480.jpg" , // Enam
 tujuh: "https://i.ibb.co/p3qbc2f/7-Tujuh-bbe317f40bc8c3c97095.jpg", // Tujuh
 lapan: "https://i.ibb.co/XtdjR9m/8-Lapan-327f78de77c469b69a7d.jpg", // Lapan
 sembilan: "https://i.ibb.co/87ryNvm/9-Sembilan-6d7c21f07cc6e273e867.jpg", // Sembilan
 sepuluhttps:"https://i.ibb.co/GfZhhVG/10-Sepuluh-1214a3213d0a5543fe01.jpg", // Sepeluh
 sebelas: "https://i.ibb.co/hR19wBg/11-Sebelas-7601ac76a708edbe44c5.jpg", // Sebelas 
 duabelas: "https://i.ibb.co/DRzZNFm/12-Dua-belas-54baac271c048bec19df.jpg", // dua belas
 tigabelas: "https://i.ibb.co/r4D59vb/13-Tiga-belas-58c8e321eb7e05a085b6-1.jpg", // tigas belas
 empatbelas: "https://i.ibb.co/VWt9BbM/14-Empat-belas-8327b75bd2f2f8ab7bce.jpg" , // Empat belas
 limbelas: "https://i.ibb.co/3hTXvRS/15-Lima-belas-185ea6db042b998c57cc.jpg" , // Lima Belas
 enambelas: "https://i.ibb.co/xLq2TZv/16-Enam-belas-1018b8cd0cd3640b5ff1.jpg" , // Enam Belas
 tujuhbelas: "https://i.ibb.co/7KDgqN4/17-Tujuh-belas-51132c3502d7431d9bea.jpg" , // Tujuh Belas
 lapanbelas: "https://i.ibb.co/0219vjv/18-Lapan-belas-d36082da2c7397ba08f2.jpg" , // Lapan Belas
 sembilanbelas: "https://i.ibb.co/LzMQFMD/19-Sembilan-belas-2d4b82594acb8430db9f.jpg" , // Sembilan Belas 
 duapuluh: "https://i.ibb.co/FnxCkbZ/20-Dua-puluh-b1585bcde54d33d9884b.jpg" , // Dua puluh
 duapuluhsatu: "https://i.ibb.co/D1pxybP/21-Dua-puluh-satu-16e74dbbe125e6a67715.jpg", // Dua puluh satu
 duapuluhdua: "https://i.ibb.co/Z65sw2H/22-Dua-puluh-dua-94fdbf4eb637e45c9917.jpg", // Dua Puluh Dua
 duapuluhtiga: "https://i.ibb.co/s99pvc8/23-Dua-puluh-tiga-150488c4f5272e27cc22.jpg", // Dua Puluh Tiga
 tigapuluh: "https://i.ibb.co/mXjSYrM/30-Tiga-puluh-032299449438f1a7260c.jpg" , // Tiga Puluh
 empatpuluh: "https://i.ibb.co/wsvV0RN/40-Empat-puluh-fdb9a1f223797624c240.jpg", // Empat Puluh
 seratus: "https://i.ibb.co/sPQ6q33/100-Seratus-d5ff48b4c11a7c4d2f1c.jpg" , // Seratus
 seribu: "https://i.ibb.co/qDgyq94/1000-Seribu-d1a76db29ae5087da73c.jpg" , // Seribu
 sejuta: "https://i.ibb.co/8DYPzWM/1000000-Sejuta-1c7b6d3e14c4db074651.jpg", // Sejuta
};

// Menampilkan output dalam elemen 'outputContainer'
const outputContainer = document.getElementById("outputContainer");

// Mula mendengar suara
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "ms-MY"; 
recognition.continuous = true; 
recognition.interimResults = true; 

recognition.start();

// Mendengar hasil percakapan
recognition.onresult = (event) => {
  const spokenText = event.results[event.results.length - 1][0].transcript.toLowerCase();
  outputContainer.textContent = spokenText;
  displayResult(spokenText);
};

// Apabila berlaku ralat
recognition.onerror = (event) => {
  outputContainer.textContent = "Ralat berlaku. Sila cuba lagi.";
};

// Apabila pengiktirafan suara berhenti
recognition.onend = () => {
  recognition.start();
};

// Menambah hasil suara yang dikenalpasti
function displayResult(spokenText) {
  const words = spokenText.split(" ");
  words.forEach(word => {
    if (wordImages[word]) {
      const item = document.createElement("div");
      item.classList.add("output-item");
      
      const img = document.createElement("img");
      img.src = wordImages[word];
      
      item.appendChild(img);
      outputContainer.appendChild(item);
    }
  });
}