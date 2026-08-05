function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.58.132.5:1080",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 5.53.119.134:1080",
        "SOCKS 150.241.115.185:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 107.173.230.93:40000",
        "SOCKS 137.184.58.163:9050",
        "SOCKS 173.255.248.203:9050",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 91.216.104.135:1080",
        "SOCKS 46.37.123.166:1081",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 23.27.143.117:3080",
        "SOCKS 213.219.210.45:1080",
        "SOCKS 110.172.29.162:443",
        "SOCKS 47.91.120.190:8443",
        "SOCKS 43.135.135.136:9050",
        "SOCKS 47.91.121.127:9999",
        "SOCKS 144.24.47.42:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}