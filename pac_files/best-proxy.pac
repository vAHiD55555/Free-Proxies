function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 130.49.187.61:1082",
        "SOCKS 176.123.169.44:1090",
        "SOCKS 78.109.137.53:1080",
        "SOCKS 146.103.110.73:1080",
        "SOCKS 103.88.234.239:40009",
        "SOCKS 216.106.179.216:49493",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 47.82.78.113:1011",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 220.112.1.194:1088",
        "SOCKS 101.255.157.6:8080",
        "SOCKS 93.184.5.121:1080",
        "SOCKS 158.101.8.92:1080",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 109.236.57.144:1080",
        "SOCKS 45.76.104.16:1080",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 103.243.82.38:8008",
        "SOCKS 111.67.103.90:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}