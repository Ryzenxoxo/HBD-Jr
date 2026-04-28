import React, { useState } from 'react';

function Music() {
    const [playing, setPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);

    const tracks = [
        `${import.meta.env.BASE_URL}music/testsong.mp3`
    ];

    return (
        <>
            <h1 className="text-3xl text-blue-400 font-semibold">
                กดฟังเพลงก่อนนะต่อง 🎧
            </h1>

            <div className="w-80 mx-auto p-4 backdrop-blur-xl bg-white/30 shadow-lg rounded-lg text-center my-5">
                <p className="text-lg font-semibold">
                    อุษาสาง - [Official Audio]
                </p>
                <p className="text-xs my-1">Jc Janez</p>

                <audio
                    src={tracks[trackIndex]}
                    controls
                    className="w-full"
                />

                <p className="mt-2 text-gray-700">
                    {`Now playing: Track ${trackIndex + 1}`}
                </p>
            </div>
        </>
    );
}

export default Music;