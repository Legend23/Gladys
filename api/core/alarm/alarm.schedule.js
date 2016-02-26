var shared = require('./alarm.shared.js');

module.exports = function schedule(alarm){
    var rule;
    
    // if the alarm is reccuring 
    if(alarm.dayofweek === -1){
        rule = new Date(alarm.datetime);
    }else{
        rule = {
            hour: parseInt(alarm.time.slice(0,2)), 
            minute: parseInt(alarm.time.slice(3)), 
            dayOfWeek: alarm.dayofweek
        };
    }
    
    var options = {
      rule: rule,
      eventName: 'alarmRing',
      value: alarm.id  
    };
    
    return gladys.scheduler.create(options)
                 .then(function(index){
                     shared.tabAlarmScheduled[alarm.id] = index;
                     return Promise.resolve(alarm); 
                 });
};