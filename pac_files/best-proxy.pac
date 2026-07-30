function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.150.44:1080",
        "SOCKS 192.248.95.98:54126",
        "SOCKS 178.16.140.119:1080",
        "SOCKS 85.234.100.149:1080",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 149.130.182.81:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 103.162.17.207:8080",
        "SOCKS 138.124.93.91:9081",
        "SOCKS 101.32.214.24:1080",
        "SOCKS 47.57.242.244:5080",
        "SOCKS 43.208.245.90:3129",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 174.138.161.146:36552",
        "SOCKS 37.204.230.182:1080",
        "SOCKS 188.242.163.28:21",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 87.255.28.101:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}