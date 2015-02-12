var subject = require('./subject.js')
var mock = require('mock-fs');
var faker = require('faker');
subject.inc('',undefined);
subject.inc('',"defined");
subject.inc(0- 1,"defined");
subject.inc(0- 1,"defined");
subject.fileTest('path/fileExists','');
subject.fileTest('path/fileExists','path/fileExists');
subject.fileTest('path/fileExists','pathContent/file1');
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
for(i = 0; i < 6000; i++){
subject.normalize(faker.phone.phoneNumber());
}
subject.normalize(faker.phone.phoneNumber());
for(i = 0; i < 6000; i++){
subject.format(faker.phone.phoneNumber(),'','');
}
subject.format(faker.phone.phoneNumber(),'',{normalize: true });
subject.format(faker.phone.phoneNumber(),'',{normalize: true });
for(i = 0; i < 6000; i++){
subject.blackListNumber(faker.phone.phoneNumber());
}
subject.blackListNumber(faker.phone.phoneNumber());
