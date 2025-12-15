function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.144.234.129:53764",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 27.147.163.188:40544",
        "SOCKS 85.90.197.62:1080",
        "SOCKS 3.232.220.76:80",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 128.140.76.145:10243",
        "SOCKS 196.204.83.235:1981",
        "SOCKS 128.140.76.145:15291",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 174.138.62.182:43715",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}