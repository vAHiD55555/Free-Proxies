function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 149.88.71.86:8080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 47.242.6.193:1011",
        "SOCKS 103.159.96.119:8080",
        "SOCKS 67.43.236.21:22469",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 47.81.14.7:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 67.43.236.22:29797",
        "SOCKS 61.118.38.234:60808",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 39.105.27.30:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}