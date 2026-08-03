function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.209.96.245:999",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 103.142.255.33:69",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 220.128.223.136:8085",
        "SOCKS 8.215.112.34:7777",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 103.134.220.49:1080",
        "SOCKS 160.250.54.6:9000",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 8.220.141.8:8889",
        "SOCKS 47.251.101.142:3128",
        "SOCKS 113.160.188.21:1080",
        "SOCKS 104.234.138.91:9080",
        "SOCKS 87.239.251.202:1081",
        "SOCKS 173.254.204.118:7890",
        "SOCKS 5.189.160.163:9100",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 13.140.164.179:3601",
        "SOCKS 43.203.195.46:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}