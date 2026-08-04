function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.140.164.179:3728",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 103.118.85.146:1080",
        "SOCKS 45.87.43.136:9050",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 103.150.206.77:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 23.27.141.243:3080",
        "SOCKS 47.82.108.195:1011",
        "SOCKS 43.133.128.153:16012",
        "SOCKS 144.31.222.106:7890",
        "SOCKS 103.138.144.202:1999",
        "SOCKS 47.75.116.41:10800",
        "SOCKS 37.220.86.195:1080",
        "SOCKS 46.17.98.40:1050",
        "SOCKS 82.9.133.51:9150",
        "SOCKS 216.106.179.216:49519",
        "SOCKS 46.37.123.166:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}