const images = [
    'dice-images/centered_dice_face_1.png',
    'dice-images/centered_dice_face_2.png',
    'dice-images/centered_dice_face_3.png',
    'dice-images/centered_dice_face_4.png',
    'dice-images/centered_dice_face_5.png',
    'dice-images/centered_dice_face_6.png'
]

function toss(){
   const indeximages = Math.floor(Math.random() * images.length);
   const selectedone = images[indeximages];

   const diceimage = document.getElementById('diceimage');
   diceimage.src = selectedone;

   diceimage.style.display = 'block';

}
