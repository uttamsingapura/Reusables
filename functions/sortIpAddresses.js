function sortIP(ipArray, isAsc) {
    let resArr = [];
    let ipMapArr = [];

    let prepareWeightOfIp = ip => {
    	let splittedIp = ip.split(".");
        let reversedArr = splittedIp.reverse();
        let weight = 0;
        for (let i=3; i>=0; i--) {
            weight = weight + parseInt(reversedArr[i] * Math.pow(10, i));
        }
        return weight;
    };

    let isValidIP = ipAddr => {
        let splittedArr = ipAddr.split(".");
        if (splittedArr.length !== 4) {
            return false;
        }
        let nonNumberEntries = splittedArr.filter(num => isNaN(num) || num > 255).length;
        if (nonNumberEntries > 0) {
            console.log("Invalid IP: " + ipAddr);
            return false;
        }
        return true;
    };

    for (let ip of ipArray) {
    	if (isValidIP(ip)) {
        	let ipWeight = prepareWeightOfIp(ip);
            ipMapArr.push({weight: ipWeight, ip: ip});
        }
    }
    let sortedMap = ipMapArr.sort((a,b) => {
    	return isAsc ? a.weight - b.weight : b.weight - a.weight;
    });
    resArr = sortedMap.map(obj => obj.ip);
    
    return resArr;
}

