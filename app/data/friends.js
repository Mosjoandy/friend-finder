var express = require("express");

// friends[0].name = "Captain America"
var friends = [
    {
        name: "Captain America",
        photo: "https://pbs.twimg.com/profile_images/938813312506064896/ciY68hiP.jpg",
        scores: [5, 5, 5, 5, 5]
    },
    {
        name: "Iron Man",
        photo: "https://uproxx.files.wordpress.com/2015/04/iron-man-tony-stark-19.jpg",
        scores: [4, 4, 4, 4, 4]
    },
    {
        name: "Doctor Strange",
        photo: "https://i0.wp.com/www.movienewsguide.com/wp-content/uploads/2017/04/Doctor-Strange-2.png",
        scores: [3, 3, 3, 3, 3]
    },
    {
        name: "Black Widow",
        photo: "https://i.kinja-img.com/gawker-media/image/upload/s--6BHxhJWs--/c_scale,f_auto,fl_progressive,q_80,w_800/woh1fxv8l0dxutdygsq3.png",
        scores: [2, 2, 2, 2, 2]
    },
    {
        name: "Scarlet Witch",
        photo: "https://www.fjackets.com/blog/wp-content/uploads/2015/10/Scarlet-Witch.jpg",
        scores: [1, 1, 1, 1, 1]
    }
]

module.exports = friends;
