function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.152.79:1080",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 193.168.198.240:1080",
        "SOCKS 103.216.49.147:1080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 8.211.195.173:999",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 93.123.30.53:3128",
        "SOCKS 47.250.51.110:80",
        "SOCKS 150.241.115.160:1080",
        "SOCKS 180.211.93.108:8080",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 103.174.122.98:3128",
        "SOCKS 78.29.53.117:1080",
        "SOCKS 66.175.236.184:1080",
        "SOCKS 45.61.133.104:7777",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 193.233.102.46:1080",
        "SOCKS 95.217.167.252:11104",
        "SOCKS 223.254.141.102:6609",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}