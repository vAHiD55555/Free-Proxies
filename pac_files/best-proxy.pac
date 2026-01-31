function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.224.10.13:6667",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 207.97.174.134:1080",
        "SOCKS 62.60.131.205:6139",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 103.118.175.107:8080",
        "SOCKS 62.60.131.183:13609",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 62.60.131.204:4642",
        "SOCKS 124.248.189.223:1080",
        "SOCKS 62.60.131.193:4054",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 36.255.98.161:4359",
        "SOCKS 103.187.86.10:8182",
        "SOCKS 66.135.227.181:4145",
        "SOCKS 36.255.98.175:11934",
        "SOCKS 192.111.135.21:4145",
        "SOCKS 62.60.131.204:5454",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}