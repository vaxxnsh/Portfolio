import IconWrapper from "./wrappers/IconWrapper";

export default function SpotifyPlayer() {
  return (
    
      <div className="relative z-50 rounded-xl w-full overflow-hidden mt-5">
        <IconWrapper className={'w-full block'}>
          <iframe
            src="https://open.spotify.com/embed/track/3HlnDsfP4g2pRpzZrueI4F?utm_source=generator&theme=0"
            width="100%"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
      </IconWrapper>
    </div>

  );
}
