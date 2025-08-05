function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.104.152:49981",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 137.184.223.13:3128",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 54.37.153.108:53695",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 216.250.11.178:3128",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 8.140.235.207:9001",
        "SOCKS 157.66.16.36:5568",
        "SOCKS 103.172.196.221:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}