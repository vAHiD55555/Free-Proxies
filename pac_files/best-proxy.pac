function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.20:1691",
        "SOCKS 91.205.131.251:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 68.71.241.33:4145",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 46.146.220.180:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 67.43.228.253:1551",
        "SOCKS 159.65.166.126:8118",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 103.172.42.121:8086",
        "SOCKS 128.140.76.145:19633",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 128.140.76.145:10000",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 205.185.120.241:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}