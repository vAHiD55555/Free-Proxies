function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 223.25.109.163:8199",
        "SOCKS 5.189.160.163:9100",
        "SOCKS 174.138.165.204:31297",
        "SOCKS 143.20.134.225:1080",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 203.76.123.6:1080",
        "SOCKS 45.143.94.111:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 113.249.111.67:1080",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 45.38.210.105:9050",
        "SOCKS 65.21.252.66:10811",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 193.43.149.54:1080",
        "SOCKS 103.101.202.75:1080",
        "SOCKS 195.91.129.101:1337",
        "SOCKS 185.225.42.91:1080",
        "SOCKS 152.53.183.107:8081",
        "SOCKS 109.195.215.208:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}