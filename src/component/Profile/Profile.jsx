import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wraper}>
      <div className={s.profile}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.lacation}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.item_text}>Followers</span>
          <span className={s.stats}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.item_text}>Views</span>
          <span className={s.stats}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.item_text}>Likes</span>
          <span className={s.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
