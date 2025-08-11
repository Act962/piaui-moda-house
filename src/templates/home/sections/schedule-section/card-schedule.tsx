type Props = {
  date: string;
  description: string;
  location: string;
};

export function CardSchedule({ date, description, location }: Props) {
  return (
    <div className="p-8 bg-gradient-to-tr from-[#E97F40] via-[#E66A31] to-[#E14918] rounded-xl text-white text-start">
      <div className="flex items-center gap-6">
        <div>Logo</div>
        <span className="font-medium line-clamp-2 w-20 uppercase">{date}</span>
      </div>

      <div className="mt-6">
        <p className="text-sm">{description}</p>
      </div>

      <span className="mt-6 block text-sm text-start">{location}</span>
    </div>
  );
}
