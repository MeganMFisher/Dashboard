DROP TABLE IF EXISTS websiteVisitors, productInventory, salesAndReturns, productTypesSold, paymentTypeReceived;

CREATE TABLE websiteVisitors
(
  id SERIAL PRIMARY KEY,
  day VARCHAR(150),
  knownContacts INTEGER,
  pageVisits INTEGER,
  visitors INTEGER
);

INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-01', 68, 99, 73);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-02', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-03', 289, 339, 320);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-04', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-05', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-06', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-07', 94, 211, 186);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-08', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-09', 35, 101, 72);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-10', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-11', 45, 129, 89);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-12', 94, 211, 186);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-13', 159, 247, 195);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-14', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-15', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-16', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-17', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-18', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-19', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-20', 45, 129, 89);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-21', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-22', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-23', 94, 211, 186);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-24', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-25', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-26', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-27', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-28', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-29', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-05-30', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-01', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-02', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-03', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-04', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-05', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-06', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-07', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-08', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-09', 94, 211, 186);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-10', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-11', 45, 129, 89);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-12', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-13', 94, 211, 186);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-14', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-15', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-16', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-17', 66, 124, 97);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-18', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-19', 98, 145, 119);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-20', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-21', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-22', 34, 102, 89);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-23', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-24', 45, 129, 89);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-25', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-26', 134, 203, 176);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-27', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-28', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-29', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-04-30', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-01', 50, 98, 75);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-02', 94, 211, 186);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-03', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-04', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-05', 289, 339, 320);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-06', 159, 247, 195);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-07', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-08', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-09', 94, 211, 186);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-10', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-11', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-12', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-13', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-14', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-15', 35, 101, 72);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-16', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-17', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-18', 94, 211, 186);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-19', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-20', 289, 343, 301);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-21', 189, 234, 221);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-22', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-23', 159, 247, 195);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-24', 278, 434, 310);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-25', 124, 187, 165);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-26', 45, 129, 89);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-27', 94, 211, 186);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-28', 200, 356, 234);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-29', 83, 189, 104);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-30', 52, 143, 90);
INSERT INTO websiteVisitors (day, knownContacts, pageVisits, visitors) VALUES ('2017-03-31', 200, 356, 234);


CREATE TABLE productInventory
(
  id SERIAL PRIMARY KEY,
  month VARCHAR(50),
  totalNumberSold INTEGER,
  totalNumberReturn INTEGER,
  totalNumberResalable INTEGER
);

INSERT INTO productInventory (month, totalNumberSold, totalNumberReturn, totalNumberResalable) VALUES ('may', 1552, 343, 311);
INSERT INTO productInventory (month, totalNumberSold, totalNumberReturn, totalNumberResalable) VALUES ('april', 1952, 598, 520);
INSERT INTO productInventory (month, totalNumberSold, totalNumberReturn, totalNumberResalable) VALUES ('march', 1252, 319, 294);


CREATE TABLE salesAndReturns
(
  id SERIAL PRIMARY KEY,
  month VARCHAR(50),
  totalAmoundSold INTEGER,
  totalAmountRefunded INTEGER,
  totalAmountUnresalableLoss INTEGER
);

INSERT INTO salesAndReturns (month, totalAmoundSold, totalAmountRefunded, totalAmountUnresalableLoss) VALUES ('may', 12520, 1319, 134);
INSERT INTO salesAndReturns (month, totalAmoundSold, totalAmountRefunded, totalAmountUnresalableLoss) VALUES ('april', 19876, 1809, 354);
INSERT INTO salesAndReturns (month, totalAmoundSold, totalAmountRefunded, totalAmountUnresalableLoss) VALUES ('march', 18228, 1419, 291);

CREATE TABLE productTypesSold
(
  id SERIAL PRIMARY KEY,
  month VARCHAR(50),
  productType VARCHAR(50),
  numberProductTypeSold INTEGER
);

INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('may', 'clothing', 291);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('may', 'shoes', 149);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('may', 'accessories', 31);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('may', 'makeup', 11);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('april', 'clothing', 328);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('april', 'shoes', 68);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('april', 'accessories', 42);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('april', 'makeup', 26);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('march', 'clothing', 419);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('march', 'shoes', 58);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('march', 'accessories', 98);
INSERT INTO productTypesSold (month, productType, numberProductTypeSold) VALUES ('march', 'makeup', 32);

CREATE TABLE paymentTypeReceived
(
  id SERIAL PRIMARY KEY,
  day VARCHAR(50),
  paypalTotal INTEGER,
  ccTotal INTEGER
);

INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-01', 68, 99);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-02', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-03', 289, 339);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-04', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-05', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-06', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-07', 94, 211);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-08', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-09', 35, 101);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-10', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-11', 45, 129);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-12', 94, 211);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-13', 159, 247);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-14', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-15', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-16', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-17', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-18', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-19', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-20', 45, 129);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-21', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-22', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-23', 94, 211);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-24', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-25', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-26', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-27', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-28', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-29', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-05-30', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-01', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-02', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-03', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-04', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-05', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-06', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-07', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-08', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-09', 94, 211);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-10', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-11', 45, 129);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-12', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-13', 94, 211);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-14', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-15', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-16', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-17', 66, 124);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-18', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-19', 98, 145);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-20', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-21', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-22', 34, 102);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-23', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-24', 45, 129);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-25', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-26', 134, 203);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-27', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-28', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-29', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-04-30', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-01', 50, 98);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-02', 94, 211);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-03', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-04', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-05', 289, 339);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-06', 159, 247);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-07', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-08', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-09', 94, 211);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-10', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-11', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-12', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-13', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-14', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-15', 35, 101);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-16', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-17', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-18', 94, 211);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-19', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-20', 289, 343);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-21', 189, 234);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-22', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-23', 159, 247);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-24', 278, 434);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-25', 124, 187);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-26', 45, 129);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-27', 94, 211);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-28', 200, 356);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-29', 83, 189);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-30', 52, 143);
INSERT INTO paymentTypeReceived (day, paypalTotal, ccTotal) VALUES ('2017-03-31', 200, 356);