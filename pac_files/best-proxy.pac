function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.92:57114",
        "SOCKS 94.182.103.182:3456",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 47.83.8.254:1111",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 47.236.164.244:1011",
        "SOCKS 152.53.171.242:22953",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 90.189.165.238:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 37.221.193.221:51551",
        "SOCKS 176.119.36.76:1337",
        "SOCKS 152.53.36.101:18017",
        "SOCKS 44.251.173.250:368",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 223.25.110.37:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}