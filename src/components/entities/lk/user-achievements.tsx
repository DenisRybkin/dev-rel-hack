const achievements = [
  'Devrel - 1 место, frontend',
  'Confa - 2 место, frontend',
  'Hackaton - участие, frontend',
  'Bayan - 3 место, frontend',
  'Devrel - 1 место, frontend',
  'Confa - 2 место, frontend',
  'Hackaton - участие, frontend',
  'Bayan - 3 место, frontend',
  'Devrel - 1 место, frontend',
  'Confa - 2 место, frontend',
];
export const UserAchievements = () => {
  return (
    <div  className="mb-4">
      <div className="text-[18px] font-semibold my-3">Достижения</div>
      <div className="flex flex-col justify-evenly flex-wrap h-[180px] w-[1314px]">
        {achievements.map((achievement, index) => (
          <div className="text-[14px] font-semibold my-3" key={index}>
            {achievement}
          </div>
        ))}
      </div>
    </div>
  );
};
