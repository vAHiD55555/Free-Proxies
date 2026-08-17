function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.18.73.60:5566",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 193.233.139.106:1080",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 118.145.141.251:44100",
        "SOCKS 45.77.37.39:2022",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 89.23.102.250:1080",
        "SOCKS 94.228.163.46:9050",
        "SOCKS 188.242.163.28:21",
        "SOCKS 129.80.80.197:9050",
        "SOCKS 111.119.162.248:10938",
        "SOCKS 195.19.50.180:1080",
        "SOCKS 45.159.189.203:1080",
        "SOCKS 128.199.104.190:41354",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 201.184.165.91:1080",
        "SOCKS 81.0.49.104:18500",
        "SOCKS 45.77.37.39:2025",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}