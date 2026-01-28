function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 187.63.9.62:63253",
        "SOCKS 62.60.131.183:4554",
        "SOCKS 36.255.98.184:4667",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 85.192.56.4:48716",
        "SOCKS 36.255.98.163:5665",
        "SOCKS 36.255.98.168:4185",
        "SOCKS 36.255.98.167:4045",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 36.255.98.151:6338",
        "SOCKS 36.255.98.178:14756",
        "SOCKS 179.96.28.58:80",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 36.255.98.154:7090",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 205.185.120.241:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}