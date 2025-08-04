function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.195.34.42:4145",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 83.147.253.215:33712",
        "SOCKS 58.186.92.254:16000",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 142.54.235.9:4145",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 35.234.154.79:10004",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 14.225.212.81:3128",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 157.66.16.63:8181",
        "SOCKS 45.146.130.45:8091",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 159.89.98.131:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}