const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const batteries = function(accum, element) {
    return accum+= element;
}
const totalBatteries = batteryBatches.reduce(batteries, 0);