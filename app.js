const districts = [
  'Anantnag',
  'Bandipora',
  'Baramulla',
  'Budgam',
  'Doda',
  'Ganderbal',
  'Jammu',
  'Kathua',
  'Kistwar',
  'Kupwara',
  'Kulgam',
  'Poonch',
  'Pulwama',
  'Rajouri',
  'Ramban',
  'Reasi',
  'Samba',
  'Shopian',
  'Srinagar',
  'Udhampur',
]

const productName = [
  'Handicrafts',
  'Walnuts',
  'Gurez black cumin and organic rajma',
  'World Class Apples',
  'Bhaderwah Rajma',
  'wicker willow work',
  'basmati rice',
  'Wheat Production',
  'Land of Sapphire and Saffron',
  'carpet weaving',
  'Walnuts kernel',
  'Herbal Tea',
  'Milk Production',
  'Chikri Handicraft',
  'Sulai Honey',
  'Citrus Production',
  'traditional Calico Printing',
  'Red Delicious Apple',
  'Tosha',
  'Onion Pickle',
]

const productImages = [
  'Resources/Images Product/Anantnag1.jpg',
  'Resources/Images Product/Bagdam1.jpg',
  'Resources/Images Product/Bandipora1.jpeg',
  'Resources/Images Product/Baramulla.jpeg',
  'Resources/Images Product/Doda.jpg',
  'Resources/Images Product/Ganderbal1.jpg',
  'Resources/Images Product/Jammu1.jpg',
  'Resources/Images Product/Kathua1.jpg',
  'Resources/Images Product/Kishtwar1.jpg',
  'Resources/Images Product/Kulgam1.jpg',
  'Resources/Images Product/Kupwara1.jpeg',
  'Resources/Images Product/Poonch1.webp',
  'Resources/Images Product/Pulwama1.jpg',
  'Resources/Images Product/Rajouri1.jpg',
  'Resources/Images Product/Ramban1.jpg',
  'Resources/Images Product/Resai1.jpg',
  'Resources/Images Product/Samba1.jpeg',
  'Resources/Images Product/Shopian1.jpg',
  'Resources/Images Product/Srinagar1.jpg',
  'Resources/Images Product/Udampur1.jpg',
]
productImages.forEach((element) => {
  element.height = '20px'
})

const cardProductName = document.querySelectorAll('.product-name')
const cardDistrictName = document.querySelectorAll('.district-name')
const cardImage = document.querySelectorAll('.card-img-top')

cardImage.height = '18rem'

for (let i = 0; i < cardDistrictName.length; i++) {
  //   console.log(card[i])
  //   console.log(cardImage[i].innerText)
  cardImage[i].src = productImages[i]
  cardProductName[i].innerText = productName[i]
  //   cardProductName[i].innerText = districts[i]
  cardDistrictName[i].innerText = districts[i]
}
