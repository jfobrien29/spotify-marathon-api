const songReviews = {
    '4kWO6O1BUXcZmaxitpVUwp': { 'name': 'Jackie Chan', 'review': 'Absolute JAM. First song on my playlist for the past 4 months...' },
    '0ljz8e0tQT3piSlT6tKWAV': { 'name': 'Prelude', 'review': 'Simple. Great. Beats.' },
    '3PTMcrpi5tbHzc8xxOZ8lG': { 'name': 'Nothing On Us', 'review': 'You got nothin on us.' },
    '1PBk2knn4anq0vaS5KGDG2': { 'name': 'In My Head', 'review': 'Recommend listening to this song if you\'re preparing to run through a wall.' },
    '1nas007nDbzLwDGwvMdz79': { 'name': 'How You Love Me', 'review': 'An ideal workout/running song.' },
    '3huV7eiNpaQlCB3LbZi9bB': { 'name': 'Bad Habit', 'review': 'The Kooks and this song just get me goin!' },
    '2NFWA9nqzDh4glNiNp1Stc': { 'name': 'Pressure - Alesso Remix', 'review': 'OG techno classic... as much as a song can be OG.' },
    '46lFttIf5hnUZMGvjK0Wxo': { 'name': 'Runaway (U & I)', 'review': 'It\'s topical comon! (RUN away)' },
    '12GEpg2XOPyqk03JZEZnJs': { 'name': 'It Ain’t Me (with Selena Gomez)', 'review': 'Always is and always will be giving out great vibes.' },
    '64dkTKKNLwbjBuU4xnS2ei': { 'name': 'Games Continued - Radio Edit', 'review': 'Princeton Lax pregame strech beats 2017.' },
    '24LS4lQShWyixJ0ZrJXfJ5': { 'name': 'Sweet Nothing (feat. Florence Welch)', 'review': 'Calvin Harris never goes out of style.' },
    '0LIU3eOAwXCZlWOiHuItkj': { 'name': 'Help Our Souls (Urban Contact Radio Edit)', 'review': 'Smooth smooth, techno jam. Old locker room jam.' },
    '3Vf9mxFMad7VR3G10QZwia': { 'name': 'Free (feat. Emeli Sandé) - Cash Cash x Gazzo Remix', 'review': 'Reminds me of losing my mind freshman year 2014.' },
    '4XLm8FNvaTlmTAZmSrrV82': { 'name': 'Shots - Broiler Remix', 'review': 'Inspiration, song form. Deep song find credit to @Spaz.' },
    '2Kl1E3NdbzT7vVi93TffoX': { 'name': 'Pompeii - Audien Remix', 'review': 'Talk about a fire remix! (This is an educated volcano joke)' },
    '57rhFcwEY1MTo3jx2af8Qk': { 'name': 'Make Me Feel', 'review': 'Make me feel looooooove!!!' },
    '3uJsg8xIH7OpWHxuJaMLJX': { 'name': 'Ride Or Die (feat. Foster The People)', 'review': 'Just great vibes, top 5 song of the last few months. Fight me.' },
    '1cdezJ6rwD2wG3kza3MWvK': { 'name': 'Green Light (feat. Morgan St. Jean)', 'review': `Alright, it's a little girly, but it's great.` },
    '06h3McKzmxS8Bx58USHiMq': { 'name': 'Silhouettes - Original Radio Edit', 'review': 'Highschool senior year... RIP Avicii' },
    '2j7HtVwC0DUoQqHSKDKTPz': { 'name': 'Fix You', 'review': 'Da da da da da-da da da daaaaaa da da da-da da.' },
    '3s4U7OHV7gnj42VV72eSZ6': { 'name': 'Rather Be (feat. Jess Glynne)', 'review': 'I\'m right where I want to be. Especially if I\'m listening to this song.' },
    '0kLH6LddJmVAlLM37zNqxf': { 'name': 'Sweet Melodies (Schier Remix)', 'review': 'Jam alert! Uh oh! Smooooth jam' },
    '4dvkDDMC5LVvD437YaxOA2': { 'name': 'What I Love', 'review': 'I got I got what you want. You got you got what I need' },
    '6YUTL4dYpB9xZO5qExPf05': { 'name': 'Summer', 'review': 'This gets me goin way more when it was warm outside... and summer. But can\'t complain!' },
    '3jKK86aBY7Uxn4fmtSOVfk': { 'name': 'Turn It Down (with Rebecca & Fiona) - Radio Edit', 'review': 'Talk about throwback beats.' },
    '6RnkFd8Fqqgk1Uni8RgqCQ': { 'name': 'Like I Do', 'review': 'David G is pretty intense.' },
    '4cxvludVmQxryrnx1m9FqL': { 'name': 'My Shot', 'review': '...we have to make this moment last, that\s plenty? Scratch that. This is not a moment, it\'s THE Movement!' },
    '4SoXQCrPQplashFebNaUw3': { 'name': 'Get It Right', 'review': 'I heard this song on a peleton bike once.' },
    '6FeAfj1h12aakG9KqK7u3u': { 'name': 'It Was London', 'review': 'Need more Kooks. They just shred!' },
    '6ZXO2ZFcAFmkFoJpMIwzGa': { 'name': 'Goin Up', 'review': 'I just don\'t understand the squeaky techno voice trend.' },
    '3Q95VQL8yWRO8mkF6VoDzi': { 'name': 'Sunset Jesus', 'review': 'This one goes out to the Sunset Jesus, RIP my dude.' },
    '7MkAPNqXIBgdfCqaQJDEOM': { 'name': 'Kamikaze - Urban Contact Remix', 'review': 'Urban Contact, whoever these guys are, get it.' },
    '6EsH66Uto1zwZlDGQ6RokU': { 'name': 'Forbidden Voices', 'review': 'Random sounds, but it works.' },
    '447yWcDPg1ddgcHBLGpJC0': { 'name': 'Better Not (feat. Wafia)', 'review': 'I listened to this song on repeat for a week or two.' },
    '22qUyTlEvJf6DAlyQjMADe': { 'name': 'Leaving You', 'review': 'Sad lyrics, stellar beat.' },
    '5ojylAKdFKpkw9axHNruKG': { 'name': 'Love', 'review': 'It\'s hard not to move with this song.' },
    '5miQGFoYZPv5JCNzSoEbWt': { 'name': 'Know This Love (feat. Litens)', 'review': 'Song has ups and downs, but overall made the playlist.' },
    '6ReKt5x6FVUXTMdWNC6GAQ': { 'name': 'Lotus Eater', 'review': 'One of my favorites of the past year, solid rock jam.' },
    '2HuSaKSnkvSaRQviRm1glh': { 'name': 'Ride Or Die (feat. Foster The People) - Vicetone Remix', 'review': 'Only song on this playlist 2x, the remix is too good.' },
    '57QXXEBy5apjgxsyXSb8YE': { 'name': 'Satisfied (feat. MAX)', 'review': 'Galantis is made for working out.' },
    '63Qco1ncI5U4qEUnxL1DsH': { 'name': 'Living', 'review': 'Check out this song at 0:50, I mean comon!' },
    '2Yo4fEPlHTxTpvo05bAb04': { 'name': 'On Your Way Down', 'review': `It's really too bad this band is from in New Zealand.` },
    '2aOlxywgl4nCD4Xh2mLWM7': { 'name': 'Spaceship (feat. Uffie)', 'review': `The most repetitive song on this playlist by a mile... but don't hate it.` },
    '0XLRWENZmLC02r36ne7GiS': { 'name': 'Another Dimension - Miike Snow Remix', 'review': 'Just when you think it\'s over, it keeps comin.' },
    '5kgqTe1BM720OjU78TGYDw': { 'name': 'Tell Me You Love Me', 'review': 'Honestly just threw all of their new songs on this playlist.' },
    '7412fpVfB2PSSb1nENQczC': { 'name': 'Sheep', 'review': 'Maybe slow to run to, but this is my favorite song. Might throw it on 2x.' },
    '77oPBfV05yqQHGaq31OxFS': { 'name': 'Alona', 'review': 'A little slow... but I hope I get to run over the Queensboro bridge at 0:44.' },
    '2GoLbyGzBYqDBq65hWs5ml': { 'name': 'Alone - CID Remix', 'review': 'There is a shockinig lack of airhorn in this playlist. Check out the drop at 1:08.' },
    '3rYfOYJb6I21qt8aX3hs2P': { 'name': 'Mela', 'review': 'Don\'t know the words know the beats.' },
    '6tB4XVKceo2307SSWXaO0y': { 'name': 'Just Friends', 'review': 'Just fwends.' },
    '5PsLICW9HfBbHZ64TT1liT': { 'name': 'Future Pt 2', 'review': 'I shazamed this song on a party bus.' },
    '7EqpEBPOohgk7NnKvBGFWo': { 'name': 'Wait For It', 'review': `Don't knock it. Listen to the words.` },
    '6luLsRZ41am7UwwQq7rEzJ': { 'name': 'Where Do We Go from Here', 'review': 'The chord progression in this song is my favorite kind of music (1:05).' },
    '1RNybormZ5O0s3DCIRQWq4': { 'name': 'Bright Blue Day Haze', 'review': 'Yup yup that\'ll do it. Great guitar.' },
    '739wgqW608GZoyfLHFLsPy': { 'name': 'Leave It In My Dreams', 'review': 'The Voidz are a funky band, but this song textbook groovy!' },
    '7jFuj6FV32pOgf0WU9t6bM': { 'name': 'King - Basic Tape Remix', 'review': 'I thought the lyrics were "treat you like a kid" for a very, very long time.' },
    '2MTSo2SGQ0oVKgPu99x3Df': { 'name': 'Dopamine', 'review': 'Bursting at the seams with dopamine.' },
    '0LO7f7ZJg871B8hLTRzrfB': { 'name': 'Julia', 'review': 'Goddam I love this song so much.' },
    '1vvNmPOiUuyCbgWmtc6yfm': { 'name': 'My Way', 'review': 'From Genius Lyrics: "Tropical anthem about getting away from anything holding you back".' },
    '4VO1K5TsBbx8Zzu8052slF': { 'name': 'Turn Me Up', 'review': 'Intensity, around 1:00 I\'m reeeeeeally feelin it.' },
    '7hrDA2n8BVGLyHra0rBiFd': { 'name': 'Younger - Kygo Remix', 'review': 'In the words of Alexander Lee, no one ever said play less Kygo.' },
    '6NSjdFYF2zxgQ7UvsKoRxy': { 'name': 'Jackpot', 'review': 'If you\'re reading this... sup? Want to hit the Jackpot?' }
};

export { songReviews };