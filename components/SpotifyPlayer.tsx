import IconWrapper from "./wrappers/IconWrapper";

export default function SpotifyPlayer() {
  return (
    <div className="relative z-50 w-full mt-5 overflow-hidden rounded-xl">
      <IconWrapper className="w-full block p-2 bg-transparent">
        <iframe
          src="https://open.spotify.com/embed/track/16umSNZfofRpDqTvf8DIAo?utm_source=generator&theme=0"
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          style={{ border: "none" }}
        ></iframe>
      </IconWrapper>
    </div>
  );
}
