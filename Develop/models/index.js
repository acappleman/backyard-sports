const User = require("./User");
const Team = require("./Team");
const Sport = require("./Sport");

////////////////////////////////
User.hasMany(Team, {
  foreignKey: "captain",
  onDelete: "CASCADE",
});

Team.belongsTo(User, {
  foreignKey: "captain",
});

////////////////////////////////
// this association does nothing, but seeds don't work if i remove it.
Sport.hasMany(User, {
  foreignKey: "sports_played",
  onDelete: "CASCADE",
});

User.belongsTo(Sport, {
  foreignKey: "sports_played",
});

////////////////////////////////
User.hasMany(Team, {
  foreignKey: "players",
  onDelete: "CASCADE",
});

Team.belongsTo(User, {
  foreignKey: "players",
  as: "player"
});

module.exports = { User, Team, Sport };