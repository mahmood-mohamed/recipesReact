import YoutubeIcon from '/assets/youtube.png'

export default function YouTubeButton({strYoutube, strMeal}) {
  return (
    <a
        href={strYoutube}
        target="_blank"
        rel="noreferrer"
        className="
        inline-flex items-center gap-2
        bg-red-600 hover:bg-red-700 text-white
        px-4 py-2 rounded-lg font-medium transition
        "
        aria-label={`Watch ${strMeal} on YouTube`}
    >
        <img src={YoutubeIcon} alt="YouTube" className="w-5 h-5" /> Watch on YouTube
    </a>
  )
}
