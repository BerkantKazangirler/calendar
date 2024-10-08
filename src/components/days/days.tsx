function Days(shortDayNames: string, gün: string) {
  return;
  (
    
    shortDayNames.map((day, index) => (
      <span
        key={index}
        className="text-white/60 px-5 bg-day uppercase rounded-xl py-1"
      >
        {day}
      </span>
    ));
    

  )
}

export default Days;
