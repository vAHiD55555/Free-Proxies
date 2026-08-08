function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.91.121.61:1088",
        "SOCKS 35.223.220.43:9050",
        "SOCKS 147.189.169.226:9050",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 192.144.57.124:9050",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 85.234.100.149:1080",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 220.128.223.136:8085",
        "SOCKS 8.211.195.139:7890",
        "SOCKS 176.65.140.214:1081",
        "SOCKS 8.211.195.139:8443",
        "SOCKS 43.163.122.46:8080",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 45.95.232.35:3128",
        "SOCKS 188.242.163.28:21",
        "SOCKS 118.69.32.171:20000",
        "SOCKS 161.97.153.238:9050",
        "SOCKS 163.223.150.97:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}