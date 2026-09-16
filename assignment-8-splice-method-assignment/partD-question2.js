let songPlaylist = [
    "Song 1",
    "Song 2",
    "Song 3",
    "Song 4",
    "Song 5",
    "Song 6"
];

console.log("Original playlist:", songPlaylist);

// 1. Removeing songs from index 2 to 4
songPlaylist.splice(2, 3);

console.log("After removing songs:", songPlaylist);

// 2. Adding 3 new songs at index 2
songPlaylist.splice(2, 0, "Song A", "Song B", "Song C");

console.log("After adding songs:", songPlaylist);

// 3. Replaceing the first song with a new one
songPlaylist.splice(0, 1, "New Song");

console.log("Final playlist:", songPlaylist);