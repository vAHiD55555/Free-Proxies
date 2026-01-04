function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 43.167.187.111:6006",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 110.235.246.243:1080",
        "SOCKS 47.245.106.129:1011",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 31.59.185.74:2525",
        "SOCKS 209.141.54.136:5555",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 62.60.131.186:5005",
        "SOCKS 101.47.17.165:7890",
        "SOCKS 62.60.131.203:8379",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 8.220.204.215:9080",
        "SOCKS 67.43.228.253:4407",
        "SOCKS 43.167.209.124:6006",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 31.211.130.237:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}