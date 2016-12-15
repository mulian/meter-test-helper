// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See test-helper-tests.js for an example of importing.
export const name = 'test-helper';
// console.log("TEST!");

var syncTimeout,functionList=[];
function syncFunction(newFunction,time) {
  function newTimeout() {
    let x = functionList.pop();
    syncTimeout=setTimeout(function() {
      x.func();
      syncTimeout=undefined;
      if(functionList.length>0) newTimeout();
    },x.time);
  }
  functionList.push({func:newFunction,time:time});
  if(!syncTimeout) newTimeout();
}
var count=0,timeoutTime=0;
function createUser(userId,done,debug=false) {
  count++;
  obj = TestHelper.Users[userId];
  Meteor.logout();
  Meteor.flush();
  // subscribers();
  if(count>3) {
    timeoutTime=1500;
    if(debug) console.log("CreateUser: slow down for 1,5sec.");
  }
  syncFunction(function() {
    SecureLayer.user.login(obj.username,obj.password, function(err) {
      if(debug) console.log(err);
      if(err) {
        SecureLayer.user.create(obj,function(err2,id) {
          if(debug) console.log(err1);
          // assert.equal(err1,undefined);
          if(err2==undefined) {
            TestHelper.Users[userId]._id=Meteor.userId();
            done(false,true);
          }
        });
      } else {
        TestHelper.Users[userId]._id=Meteor.userId();
        done(false,false);
      }
    });
  },timeoutTime);
}

TestHelper = {
  createUser: createUser,
  Users:{
    user1: {
      username: "test1",
      email : "test@test.de",
      password : 'password!1',
      firstname: "FirstNameTest1",
      lastname: "LastNameTest1",
    },
    user2: {
      username: "test2",
      email : "test2@test.de",
      password : 'password!2',
    },
    user3: {
      username: "test3",
      email : "test3@test.de",
      password : 'password!3',
    },
    user4: {
      username: "test4",
      email : "test4@test.de",
      password : 'password!4',
    },
  },

}
