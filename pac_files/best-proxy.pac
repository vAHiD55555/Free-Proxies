function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.79.193.204:16000",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 27.71.132.134:16000",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 58.186.92.84:16000",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 42.117.168.83:16000",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 67.211.219.122:8888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}