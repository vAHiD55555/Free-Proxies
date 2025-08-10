function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.68.147.8:3000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 135.181.203.208:80",
        "SOCKS 135.181.213.184:40027",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 97.79.251.186:80",
        "SOCKS 210.87.125.146:8090",
        "SOCKS 192.177.33.195:8000",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 103.147.118.240:8080",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 116.202.103.223:29210",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}