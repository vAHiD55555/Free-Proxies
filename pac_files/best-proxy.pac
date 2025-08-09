function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 83.222.184.91:3128",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 5.188.183.253:8080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 27.71.134.202:16000",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 103.250.14.26:8199",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 42.118.0.5:16000",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 188.166.104.152:49981",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}