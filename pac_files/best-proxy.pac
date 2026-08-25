function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.199.25.13:3901",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 107.173.230.93:40000",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 38.199.30.82:999",
        "SOCKS 118.145.141.251:44103",
        "SOCKS 185.214.101.27:1080",
        "SOCKS 213.184.149.74:1080",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 195.114.7.6:1080",
        "SOCKS 5.75.133.113:10811",
        "SOCKS 45.74.31.42:8089",
        "SOCKS 31.76.15.189:3128",
        "SOCKS 88.218.206.170:22",
        "SOCKS 45.74.31.30:8807",
        "SOCKS 103.171.183.129:3125",
        "SOCKS 175.136.215.4:18080",
        "SOCKS 103.118.85.75:1080",
        "SOCKS 111.119.162.248:10939",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}