function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.245.204.90:1120",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 128.140.76.145:14413",
        "SOCKS 198.23.189.151:8118",
        "SOCKS 195.98.82.63:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 8.219.154.250:1011",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 115.127.83.142:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}