import { useRef, useEffect, useState, React } from 'react';
import WaveSurfer from 'wavesurfer.js';
import Regions from 'wavesurfer.js/dist/plugins/regions.esm.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeDown,
  faVolumeOff,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: '#ccc',
  progressColor: '#fa5c6f',
  curserColor: 'transparent',
  responsive: true,
  height: 40,
  normalize: true,
  backend: 'WebAudio',
  barwidth: 2,
  barGap: 3,
});

const Audio = ({ audioFile }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioFileName, setAudioFileName] = useState('');

  useEffect(() => {
    //create wavesurfer with options
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    //load the audio file
    wavesurfer.current.load(audioFile);

    //when wave surfer is ready
    wavesurfer.current.on('ready', () => {
      setVolume(wavesurfer.current.getVolume());
      setDuration(wavesurfer.current.getDuration());
      setAudioFileName(audioFile.split('/').pop());
    });

    wavesurfer.current.on('audioprocess', () => {
      setCurrentTime(wavesurfer.current.getCurrentTime());
    });

    // clean up eventlisteners
    return () => {
      wavesurfer.current.un('audioprocess');
      wavesurfer.current.un('ready');
      wavesurfer.current.destroy();
    };
  }, [audioFile]);

  const formatTime = (seconds) => {
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
  };
  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };
  const handleMute = () => {
    setMuted(!muted);
    wavesurfer.current.setVolume(muted ? volume : 0);
  };
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    wavesurfer.current.setVolume(newVolume);
    setMuted(newVolume === 0);
  };
  const handleVolumeDown = () => {
    handleVolumeChange(Math.max(volume - 0.1, 0));
  };
  const handleVolumeUp = () => {
    handleVolumeChange(Math.min(volume + 0.1, 1));
  };
  return (
    <div id='waveform' ref={waveformRef} className='w-full'>
      <div className='controls w-full flex justify-center gap-3'>
        <button style={{ backgroundColor: '#fa5c6f' }}>
          <FontAwesomeIcon
            onClick={handlePlayPause}
            icon={playing ? faPause : faPlay}
          />
        </button>
        <button style={{ backgroundColor: '#fa5c6f' }}>
          <FontAwesomeIcon
            onClick={handleMute}
            icon={muted ? faVolumeOff : faVolumeMute}
          />
        </button>
        <input
          className='range'
          type='range'
          id='volume'
          name='volume'
          min='0'
          max='1'
          step='0.5'
          value={muted ? 0 : volume}
          onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
        />
        <button style={{ backgroundColor: '#fa5c6f' }}>
          <FontAwesomeIcon onClick={handleVolumeDown} icon={faVolumeDown} />
        </button>
        <button style={{ backgroundColor: '#fa5c6f' }}>
          <FontAwesomeIcon onClick={handleVolumeUp} icon={faVolumeUp} />
        </button>
      </div>
      <div className='audio-info font-[poppins] text-sm'>
        <div className='flex justify-between'>
          <span>
            {audioFileName} <br />
          </span>
          <span>Volume: {Math.round(volume * 100)}%</span>
        </div>
        <div className='flex justify-between'>
          <span> {formatTime(duration)}</span>
          <span> {formatTime(currentTime)}</span>
        </div>
      </div>
    </div>
  );
};

export default Audio;
