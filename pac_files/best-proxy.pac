function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.164.206.96:13024",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 159.8.114.37:80",
        "SOCKS 203.189.158.218:1080",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 115.79.70.69:8470",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 124.248.177.44:1080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 200.201.134.184:8787",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 8.212.177.126:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}