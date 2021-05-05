const Database = require('../db/config')

module.exports = {
  async get() {
    const db = await Database()

    const data = await db.get(`SELECT * FROM profile`)

    await db.close()

    return {
      name: data.name,
      avatar: data.avatar,
      "monthly-budget": data.monthly_budget,
      "days-per-week": data.days_per_week,
      "hours-per-day": data.hours_per_day,
      "vacation-per-year": data.vacation_per_year,
      "value-hour": data.value_hour
    };
  },

  async update(updatedProfile) {
    const db = await Database()
    
    await db.run(`
      UPDATE profile SET 
        name = "${updatedProfile.name}",
        avatar = "${updatedProfile.avatar}",
        monthly_budget = ${updatedProfile["monthly-budget"]},
        days_per_week = ${updatedProfile["days-per-week"]},
        hours_per_day = ${updatedProfile["hours-per-day"]},
        vacation_per_year = ${updatedProfile["vacation-per-year"]},
        value_hour = ${updatedProfile["value-hour"]}
    `)

    await db.close()
  },
};
